import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import UserTypeCard from "./UserTypeCard";

const Container = styled.div`
  display: flex;
  margin: 0 4rem;
  flex-wrap: wrap;
`;

function Products() {
  let location = useLocation();
  const userType = location.pathname?.split("/")?.[1];

  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
}

export default Products;
