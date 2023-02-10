import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GeneralComponent from "./GeneralComponent";
import { userTypeProduct } from "./Products";
const SizeChart = lazy(() => import("./SizeChart"));

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;
const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding-left: 1rem;
  margin-bottom: 10px;
`;
const ImageDiv = styled.img`
  height: 30rem;
  width: 100%;
  background-image: ${({ src }) => `url(${src})`};
`;
const ContainerLeft = styled.div`
  width: 45%;
  display: flex;
  flex: 1 1 auto;
  border: 1px solid #f5f5f6;
  margin-bottom: 10px;
`;

const ProductBrand = styled.div`
  color: #282c3f;
  padding: 0 20px 0 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;
const ProductDescription = styled.div`
  color: #535665;
  padding: 5px 20px 14px 0;
  font-size: 20px;
  opacity: 0.8;
  font-weight: 400;
`;
const Price = styled.div`
  color: #696e79;
  font-size: 24px;
  margin-top: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  line-height: 1;
  display: flex;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DiscountedPrice = styled.div`
  color: #282c3f;
  margin-right: 12px;
  font-weight: bold;
`;
const Strike = styled.div`
  text-decoration: line-through;
  height: 22px;
  opacity: 0.8;
  font-size: 20px;
  line-height: 1.1;
`;
const DiscountedPercentage = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #ff905a;
`;

const HorizontalLine = styled.div`
  border: 1px solid #bfc0c6;
`;

const TaxInfo = styled.div`
  color: #03a685;
  font-weight: 500;
  font-size: 14px;
  display: block;
  margin: 5px 10px 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`;
const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background-color: #ff3e6c;
  border: 1px solid #ff3e6c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  min-width: 50%;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 2%;
  flex: 3;
  border-radius: 4px;
`;
const WishButton = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: 1px solid #d4d5d9;
  background-color: #fff;
  letter-spacing: 0.4px;
  color: #282c3f;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  min-width: 40%;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: auto;
  border-radius: 4px;
`;

function Product() {
  let { userCat, productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    let productToSearch = userTypeProduct[userCat];
    const response = productToSearch?.filter((curr) => curr?.pId === productId);
    if (response?.length > 0) {
      setProduct(response[0]);
    }
    setIsLoading(false);
  }, [userCat, productId]);

  const getDiscountedPrice = () => {
    let tempPrice = Number(product?.price) || 0;
    let tempDisPer = Number(product?.discountPer) || 0;
    return tempPrice - Math.floor((tempPrice * tempDisPer) / 100);
  };

  const getContent = () => {
    if (isLoading) {
      return <GeneralComponent val="Loading" />;
    }
    if (Object.keys(product).length > 0) {
      return (
        <Suspense fallback={<GeneralComponent val="Loading" />}>
          <Container>
            <ContainerLeft>
              <ImageDiv src={product?.imageUrl} />
            </ContainerLeft>
            <ContainerRight>
              <ProductBrand>{product?.brand}</ProductBrand>
              <ProductDescription>{product?.description}</ProductDescription>
              <HorizontalLine />
              <Price>
                <Wrap>
                  <DiscountedPrice>{getDiscountedPrice()}</DiscountedPrice>
                  <Strike>{product?.price}</Strike>
                </Wrap>
                <DiscountedPercentage>{`(${product?.discountPer}% OFF)`}</DiscountedPercentage>
              </Price>
              <TaxInfo>inclusive of all taxes</TaxInfo>
              <SizeChart type={userCat} />
              <ButtonContainer>
                <AddButton>ADD TO BAG</AddButton>
                <WishButton>Wishlist</WishButton>
              </ButtonContainer>
            </ContainerRight>
          </Container>
        </Suspense>
      );
    }
    return <GeneralComponent val="NoData" />;
  };

  return getContent();
}

export default Product;
