import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #000000;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
  margin-bottom: 4px;
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

const List = styled.ul`
  list-style: none;
  display: flex;
  text-decoration: none;
`;
const ListItem = styled.li`
  font-size: 1.25rem;
  margin-right: 8px;
  & > a {
    color: #282c3f;
    text-decoration: none;
    font-weight: 500;
  }
`;

function Header() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <ContainerLeft onClick={handleClick}>EComDemo</ContainerLeft>
      <ContainerRight>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/men/products">Men</Link>
          </ListItem>
          <ListItem>
            <Link to="/women/products">Women</Link>
          </ListItem>
        </List>
      </ContainerRight>
    </Container>
  );
}

export default Header;
