import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  width: 45%;
  height: 60vh;
  flex: 1 1 auto;
  margin: 1rem;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1rem;
  color: #000000;
`;

const ImageContainer = styled.div`
  height: calc(100% - 2rem);
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto;
`;
const Title = styled.div``;

function UserTypeCard({ userType, userImage }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`${userType}/products`);
  };
  return (
    <MainContainer onClick={handleClick}>
      <ImageContainer>
        <img src={userImage} alt="N/A" />
      </ImageContainer>
      <TextContainer>
        <Title>{userType}</Title>
      </TextContainer>
    </MainContainer>
  );
}

export default UserTypeCard;
