import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 12rem;
  width: 12rem;
  margin: 1rem;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

function BannerCard({ bannerType, bannerImage }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`${bannerType}/products`);
  };
  return (
    <Container onClick={handleClick}>
      <Image src={bannerImage} alt="NA" />
    </Container>
  );
}

export default BannerCard;
