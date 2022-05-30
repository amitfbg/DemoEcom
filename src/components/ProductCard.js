import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 15rem;
  background-color: #fff;
  height: 19rem;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 5px 0 rgba(31, 38, 135, 0.37);
`;
const ImageDiv = styled.div`
  height: 210px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;
const ContentDiv = styled.div`
  padding: 0 10px;
  height: 100%;
  margin: 14px 0;
  overflow: hidden;
`;
const ProductBrand = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #282c3f;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProductDescription = styled.div`
  color: #535766;
  font-size: 14px;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
`;
const Price = styled.div`
  font-size: 14px;
  color: #282c3f;
  font-weight: 500;
  line-height: 15px;
  margin: 10px 0 6px;
  white-space: nowrap;
`;
const Wrap = styled.span``;
const DiscountedPrice = styled.span``;
const Strike = styled.span`
  text-decoration: line-through;
  color: #7e818c;
  font-weight: 400;
  margin-left: 5px;
  font-size: 12px;
`;
const DiscountedPercentage = styled.span`
  color: #ff905a;
  font-weight: 400;
  font-size: 12px;
  margin-left: 5px;
`;

function ProductCard({ productData }) {
  const history = useHistory();
  let location = useLocation();

  const { brand, imageUrl, description, price, discountPer, pId } = productData;

  const getDiscountedPrice = () => {
    return price - Math.floor((price * discountPer) / 100);
  };
  const handleClick = () => {
    history.push(`${location.pathname}/${pId}`);
  };
  return (
    <Container onClick={handleClick}>
      <ImageDiv>
        <Image src={imageUrl} />
      </ImageDiv>
      <ContentDiv>
        <ProductBrand>{brand}</ProductBrand>
        <ProductDescription>{description}</ProductDescription>

        <Price>
          <Wrap>
            <DiscountedPrice>{getDiscountedPrice()}</DiscountedPrice>
            <Strike>{price}</Strike>
          </Wrap>
          <DiscountedPercentage>{`(${discountPer}% OFF)`}</DiscountedPercentage>
        </Price>
      </ContentDiv>
    </Container>
  );
}

export default ProductCard;
