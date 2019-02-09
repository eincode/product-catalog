import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CatalogItem from "../components/CatalogItem";

export default class Catalog extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Filter>Rekomendasi Produk</Filter>
        <CatalogItem />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Filter = styled.div`
  background-color: white;
  flex: 1;
  min-width: 39.5%;
  padding: 20px;
`;
