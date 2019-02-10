import React, { Component } from "react";
import styled from "styled-components";
import CatalogItem from "../components/CatalogItem";
import { Query } from "react-apollo";

import { GetAllProducts } from "../graphql/queries/GetAllProducts";

import PRODUCT_PICTURE from "../assets/catalog_picture.jpg";
import CATEGORY_PICTURE from "../assets/category_image.jpg";
import EDITORIAL_PICTURE from "../assets/editorial_image.jpg";
import NewestItem from "../components/NewestItem";
import Section from "../components/Section";
import CategoryItem from "../components/CategoryItem";
import ActivityIndicator from "../components/ActivityIndicator";

export default class Catalog extends Component {
  render() {
    return (
      <Container>
        <Newest>
          <TitleContainer>
            <div style={{ margin: "10px" }}>Terbaru</div>
            <TitleButton>Lihat Semua ></TitleButton>
          </TitleContainer>
          <div className={"newestContainer"}>
            {DUMMY_DATA.newestItem.map(item => (
              <NewestItem
                image={item.image}
                price={item.price}
                productName={item.productName}
              />
            ))}
          </div>
        </Newest>
        <Section title={"Kategori"}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            {DUMMY_DATA.categories.map(item => (
              <CategoryItem
                image={item.image}
                categoryName={item.categoryName}
              />
            ))}
          </div>
        </Section>
        <Section title={"Dress Murah"}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <PriceButton>Dibawah Rp. 150.000</PriceButton>
            <PriceButton>Rp. 150.000 - Rp. 250.000</PriceButton>
          </div>
        </Section>
        <Section title={"Editorial"}>
          <img src={EDITORIAL_PICTURE} style={{ objectFit: "contain" }} />
        </Section>
        <Section title={"Rekomendasi Produk"} notSpaced={true}>
          <span>
            <SortButton>
              <option value="" disabled selected hidden>
                Urutkan
              </option>
            </SortButton>
          </span>
        </Section>
        <Query query={GetAllProducts} variables={{ lastIndex: 2 }}>
          {({ loading, error, data }) => {
            console.log(data);
            return <div />;
          }}
        </Query>
        <CatalogItem
          image={PRODUCT_PICTURE}
          productName={"Loinaya Stripe A Line Mini Dress"}
          dressSize={"S, M, L, XL"}
          price={119.0}
        />
        <CatalogItem
          image={PRODUCT_PICTURE}
          productName={"Loinaya Stripe A Line Mini Dress"}
          dressSize={"S, M, L, XL"}
          price={119.0}
        />
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

const DUMMY_DATA = {
  categories: [
    {
      image: CATEGORY_PICTURE,
      categoryName: "MINI DRESS"
    },
    {
      image: CATEGORY_PICTURE,
      categoryName: "MIDI DRESS"
    },
    {
      image: CATEGORY_PICTURE,
      categoryName: "MAXI DRESS"
    }
  ],
  newestItem: [
    {
      image: PRODUCT_PICTURE,
      productName: "Navedr Lace Cape",
      price: 169.0
    },
    {
      image: PRODUCT_PICTURE,
      productName: "Aulidya Brukat",
      price: 169.0
    }
  ]
};
