import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import queryString from "query-string";
import styled from "styled-components";
import Section from "../components/Section";
import CatalogList from "../components/CatalogList";

export default class Browse extends Component<RouteComponentProps<any>> {
  render() {
    const filters = queryString.parse(this.props.location.search);
    return (
      <Container>
        <Section title={"Rekomendasi Produk"} />
        <CatalogList {...filters} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: auto;

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;
