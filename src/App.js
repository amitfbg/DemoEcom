import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";

const ContainerBody = styled.div`
  height: calc(100% - 3rem);
  overflow: auto;
`;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <ContainerBody>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/men/products">
              <Products />
            </Route>
            <Route exact path="/women/products">
              <Products />
            </Route>
            <Route exact path="/men/products/:productId">
              <Product />
            </Route>
            <Route exact path="/women/products/:productId">
              <Product />
            </Route>
            <Redirect to="/" />
          </Switch>
        </ContainerBody>
      </BrowserRouter>
    </div>
  );
}

export default App;
