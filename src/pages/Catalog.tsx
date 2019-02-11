import React, { Component } from "react";
import styled from "styled-components";
import CatalogItem from "../components/CatalogItem";
import { Query } from "react-apollo";
import Observer from "@researchgate/react-intersection-observer";

import {
  GetAllProductsQuery,
  GetAllProductsResponse,
  GetAllProductsVariables
} from "../graphql/queries/GetAllProducts";
import {
  GetNewestProductsResponse,
  GetNewestProductsQuery
} from "../graphql/queries/GetNewestProducts";
import {
  GetCategoriesQuery,
  GetCategoriesResponse
} from "../graphql/queries/GetCategories";

import PRODUCT_PICTURE from "../assets/catalog_picture.jpg";
import CATEGORY_PICTURE from "../assets/category_image.jpg";
import EDITORIAL_PICTURE from "../assets/editorial_image.jpg";
import NewestItem from "../components/NewestItem";
import Section from "../components/Section";
import CategoryItem from "../components/CategoryItem";
import ActivityIndicator from "../components/ActivityIndicator";
import CatalogList from "../components/CatalogList";
import Link from "../components/Link";

export default class Catalog extends Component {
  render() {
    return (
      <Container>
        <Newest>
          <TitleContainer>
            <div style={{ margin: "10px" }}>Terbaru</div>
            <Link
              to={{
                pathname: "/browse",
                search: "sortByNewest=true",
                state: { page: "browse" }
              }}
            >
              <TitleButton>Lihat Semua ></TitleButton>
            </Link>
          </TitleContainer>
          <div className={"newestContainer"}>
            <Query<GetNewestProductsResponse> query={GetNewestProductsQuery}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <ActivityIndicator />;
                } else if (error) {
                  return <div>{error.message}</div>;
                } else if (data) {
                  return data.product.map(item => (
                    <NewestItem
                      productName={item.name}
                      image={item.image}
                      key={item.id}
                      price={item.price}
                      id={item.id}
                    />
                  ));
                }
              }}
            </Query>
          </div>
        </Newest>
        <Section title={"Kategori"}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <Query<GetCategoriesResponse> query={GetCategoriesQuery}>
              {({ loading, error, data }) => {
                if (loading) return <ActivityIndicator />;
                else if (error) return <div>{error.message}</div>;
                else if (data)
                  return data.category.map(item => (
                    <CategoryItem
                      key={item.id}
                      categoryName={item.name}
                      image={item.image}
                      id={item.id}
                    />
                  ));
              }}
            </Query>
          </div>
        </Section>
        <Section title={"Dress Murah"}>
          <div
            style={{
              flexDirection: "row",
              display: "flex"
            }}
          >
            <Link
              to={{
                pathname: "/browse",
                search: "lessThan=150000",
                state: { page: "browse" }
              }}
              style={{ width: "100%" }}
            >
              <PriceButton>Dibawah Rp. 150.000</PriceButton>
            </Link>
            <Link
              to={{
                pathname: "/browse",
                search: "lessThan=250000&greaterThan=150000",
                state: { page: "browse" }
              }}
              style={{ width: "100%" }}
            >
              <PriceButton>Rp. 150.000 - Rp. 250.000</PriceButton>
            </Link>
          </div>
        </Section>
        <Section title={"Editorial"}>
          <img src={EDITORIAL_PICTURE} style={{ objectFit: "contain" }} />
        </Section>
        <Section title={"Rekomendasi Produk"} notSpaced={true} />
        <CatalogList />
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

const Newest = styled.div`
  display: flex;
  background-color: white;
  width: calc(100% -20px);
  padding: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  flex-direction: column;

  .newestContainer {
    display: flex;
    margin-top: 10px;
  }
`;

const TitleButton = styled.div`
  margin: 10px;
  font-size: 10pt;
  color: rgb(170, 0, 90);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceButton = styled.div`
  margin: 20px 5px;
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(254, 212, 213);
  border-radius: 5px;
  font-weight: normal;
  font-size: 10pt;

  @media only screen and (max-width: 425px) {
    font-size: 8pt;
  }
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
