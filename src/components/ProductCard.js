import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 15rem;
  background-color: #fff;
  height: 18rem;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0.5rem;
  border-radius: 0.5rem;
  //   &:last-child {
  //     flex: 0 0 auto;
  //   }
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
  margin-top: 14px;
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

function ProductCard() {
  return (
    <Container>
      <ImageDiv>
        <Image src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11487342/2020/6/17/6c1f01ed-ed82-493c-92bd-3df9a35605741592396334139-Nautica-Men-Tshirts-721592396332125-5.jpg" />
      </ImageDiv>
      <ContentDiv>
        <ProductBrand>T</ProductBrand>
        <ProductDescription>ST</ProductDescription>

        <Price>
          <Wrap>
            <DiscountedPrice>DP</DiscountedPrice>
            <Strike>SP</Strike>
          </Wrap>
          <DiscountedPercentage>{`(10% OFF)`}</DiscountedPercentage>
        </Price>
      </ContentDiv>
    </Container>
  );
}

export default ProductCard;
