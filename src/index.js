import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";

import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";

const Container = styled.div`
  .content-container {
    margin-top: 55px;
    padding: 0px;
  }

  @media only screen and (max-width: 425px) {
    .content-container {
      padding: 0;
    }
  }
`;

const routing = (
  <Router>
    <Container>
      <Header />
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route exact path="/product" component={ProductDetail} />
        </Switch>
      </div>
    </Container>
  </Router>
);

export default ReactDOM.render(routing, document.getElementById("root"));
