import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";

import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import GraphqlClient from "./graphql/client";
import Browse from "./pages/Browse";

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
  <ApolloProvider client={GraphqlClient}>
    <Router>
      <ScrollToTop>
        <Container>
          <Header />
          <div className="content-container">
            <Switch>
              <Route exact path="/" component={Catalog} />
              <Route path="/product/:productId" component={ProductDetail} />
              <Route path="/browse" component={Browse} />
            </Switch>
          </div>
        </Container>
      </ScrollToTop>
    </Router>
  </ApolloProvider>
);

export default ReactDOM.render(routing, document.getElementById("root"));
