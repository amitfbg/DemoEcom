import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #000000;
`;
const ContainerLeft = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  cursor: pointer;
`;
const ContainerRight = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <ContainerLeft onClick={handleClick}>ReactDemo</ContainerLeft>
      <ContainerRight></ContainerRight>
    </Container>
  );
}

export default Header;
