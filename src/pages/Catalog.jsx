import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CatalogItem from "../components/CatalogItem";

export default class Catalog extends Component {
  render() {
    return (
      <Container>
        <Filter>
          Rekomendasi Produk
          <span>
            <SortButton>
              <option value="" disabled selected hidden>
                Urutkan
              </option>
            </SortButton>
          </span>
        </Filter>
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
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const SortButton = styled.select`
  border-radius: 10px;
  padding: 10px 40px 10px 10px;
  font-weight: bold;
  border-width: 1px;
  border-color: rgb(232, 232, 232);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-top: 15px;
  font-size: 10pt;
`;
