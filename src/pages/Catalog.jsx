import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CatalogItem from "../components/CatalogItem";

export default class Catalog extends Component {
  render() {
    return (
      <Container>
        <Filter>Rekomendasi Produk</Filter>
        <CatalogItem />
        <CatalogItem />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin: auto;

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Filter = styled.div`
  background-color: white;
  flex: 1;
  padding: 20px;
  width: calc(100% - 40px);
`;
