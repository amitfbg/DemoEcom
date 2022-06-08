/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";

const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/">
        <Header />
        <ContainerBody id="c-body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:userCat/products">
              <Products />
            </Route>
            <Route exact path="/:userCat/products/:productId">
              <Product />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </ContainerBody>
      </BrowserRouter>
    </div>
  );
}

export default App;
