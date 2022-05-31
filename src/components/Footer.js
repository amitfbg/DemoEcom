import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 20px;
  width: 100%;
`;

function Footer() {
  return <Container>© 2022 Copyright: Wingify</Container>;
}

export default Footer;
