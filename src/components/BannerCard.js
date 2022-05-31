import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 12rem;
  width: 12rem;
  margin: 1rem;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

function BannerCard({ bannerType, bannerImage }) {
  return (
    <Container>
      <Image src={bannerImage} alt="NA" />
    </Container>
  );
}

export default BannerCard;
