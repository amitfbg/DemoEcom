import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
`;
const ContainerRight = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding-left: 1rem;
`;
const ImageDiv = styled.div`
  height: 30rem;
  width: 100%;
  background-image: url(https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg);
  background-size: cover;
`;
const ContainerLeft = styled.div`
  width: 58%;
  display: flex;
  flex: 1 1 auto;
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
  font-size: 14px;
  margin-top: 14px;
  margin-bottom: 5px;
`;
const Wrap = styled.span``;
const DiscountedPrice = styled.span`
  color: #282c3f;
  margin-right: 12px;
  font-weight: bold;
`;
const Strike = styled.span`
  text-decoration: line-through;
  height: 22px;
  opacity: 0.8;
  font-size: 20px;
  line-height: 1.2;
`;
const DiscountedPercentage = styled.span`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #ff905a;
`;

const SizeContainer = styled.div``;
const SizeHeader = styled.div``;
const SizeOptions = styled.div``;

const Size = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid #bfc0c6;
  color: #282c3f;
  cursor: pointer;
  &:hover {
    border: 1px solid #ff3f6c;
    color: #ff3f6c;
  }
`;

function Product() {
  return (
    <Container>
      <ContainerLeft>
        <ImageDiv />
      </ContainerLeft>
      <ContainerRight>
        <ProductBrand>T</ProductBrand>
        <ProductDescription>ST</ProductDescription>

        <Price>
          <Wrap>
            <DiscountedPrice>DP</DiscountedPrice>
            <Strike>SP</Strike>
          </Wrap>
          <DiscountedPercentage>{`(10% OFF)`}</DiscountedPercentage>
        </Price>
        <SizeContainer>
          <SizeHeader>Select Size</SizeHeader>
          <SizeOptions>
            <Size>XXL</Size>
          </SizeOptions>
        </SizeContainer>
      </ContainerRight>
    </Container>
  );
}

export default Product;
