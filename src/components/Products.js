import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  menProducts,
  womenProducts,
  kidsProducts,
  watchProducts,
  beautyProducts,
  bathProducts,
} from "../__mockData__/mockData";
import GeneralComponent from "./GeneralComponent";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  margin: 0 4rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const userTypeProduct = {
  men: menProducts,
  women: womenProducts,
  child: kidsProducts,
  watches: watchProducts,
  beauty: beautyProducts,
  bath: bathProducts,
};

function Products() {
  let { userCat } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (userTypeProduct[userCat]) setProducts(userTypeProduct[userCat]);
    else setProducts([]);
  }, [userCat]);

  const getContent = () => {
    if (products && products?.length > 0)
      return (
        <Container>
          {products.map((currProduct) => (
            <ProductCard productData={currProduct} key={currProduct?.pId} />
          ))}
        </Container>
      );
    else return <GeneralComponent val="NoData" />;
  };

  return getContent();
}

export default Products;
