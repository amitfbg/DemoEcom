import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { menProducts, womenProducts } from "../__mockData__/mockData";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  margin: 0 4rem;
  flex-wrap: wrap;
`;

function Products() {
  let location = useLocation();
  const [products, setProducts] = useState([]);
  const userType = location.pathname?.split("/")?.[1];
  useEffect(() => {
    if (userType == "men") setProducts(menProducts);
    else setProducts(womenProducts);
  }, [userType]);

  return (
    <Container>
      {products &&
        products?.length > 0 &&
        products.map((currProduct) => (
          <ProductCard productData={currProduct} key={currProduct?.pId} />
        ))}
    </Container>
  );
}

export default Products;
