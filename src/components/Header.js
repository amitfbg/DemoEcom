import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #000000;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
  margin-bottom: 4px;
  background-color: #ffffff;
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
  @media screen and (max-width: 768px) {
    display: ${({ isNavExpanded }) => !isNavExpanded && "none"};
    position: absolute;
    top: 5rem;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 5rem);
    background-color: white;
    border-top: 1px solid black;
  }
`;
const ListItem = styled.li`
  font-size: 1.25rem;
  margin-right: 8px;
  & > a {
    color: #282c3f;
    text-decoration: none;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
    display: flex;
    & > a {
      color: black;
      width: 100%;
      padding: 1.5rem 0;
    }
    &:hover {
      background-color: #eee;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #283b8b;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  &:hover {
    background-color: #2642af;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const history = useHistory();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <ContainerLeft onClick={handleClick}>EComDemo</ContainerLeft>
      <Hamburger
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </Hamburger>
      <ContainerRight>
        <List isNavExpanded={isNavExpanded}>
          <ListItem>
            <Link id='men-nav' to="/men/products">Men</Link>
          </ListItem>
          <ListItem>
            <Link id='women-nav' to="/women/products">Women</Link>
          </ListItem>
          <ListItem>
            <Link id='child-nav' to="/child/products">Kid</Link>
          </ListItem>
        </List>
      </ContainerRight>
    </Container>
  );
}

export default Header;
