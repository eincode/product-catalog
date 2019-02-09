import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Catalog from "./pages/Catalog";
import Header from "./components/Header";

const Container = styled.div`
  .content-container {
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
        <Route path="/" component={Catalog} />
      </div>
    </Container>
  </Router>
);

export default ReactDOM.render(routing, document.getElementById("root"));
