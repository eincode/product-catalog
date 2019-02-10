import React, { Component } from "react";
import styled from "styled-components";

import PRODUCT_IMAGE from "../assets/catalog_picture.jpg";
import Button from "../components/Button";
import Section from "../components/Section";
import NewestItem from "../components/NewestItem";
import CatalogItem from "../components/CatalogItem";

export default class ProductDetail extends Component {
  state = {
    isSizeDetailExpanded: false
  };

  render() {
    return (
      <Container>
        <ProductImage src={PRODUCT_IMAGE} />
        <ProductName>Loinaya Stripe A Line Mini Dress</ProductName>
        <ProductPrice>Rp. 119.000</ProductPrice>
        <SectionContainer>
          <SectionLabel>BAHAN UTAMA</SectionLabel>
          <div>Twistcone kombinasi Katun</div>
        </SectionContainer>
        <SectionContainer>
          <div>Pilih warna yang tersedia</div>
          <ButtonWrapper>
            <Button label={"BLACK"} type={"active"} />
            <Button label={"NAVY (BLUE)"} type={"inactive"} />
            <Button label={"MAROON (RED)"} type={"inactive"} />
          </ButtonWrapper>
          <div>Pilih ukuran yang tersedia</div>
          <ButtonWrapper>
            <Button label={"S"} type={"inactive"} />
            <Button label={"M"} type={"inactive"} />
            <Button label={"L"} type={"inactive"} />
            <Button label={"XL"} type={"inactive"} />
          </ButtonWrapper>
          <div>Panduan ukuran</div>
        </SectionContainer>
        <SectionContainer>
          <SectionLabel>60,000 kali disimpan</SectionLabel>
          <ButtonWrapper>
            <Button label={"Simpan"} type={"inactive"} />
            <Button label={"Beli Sekarang"} type={"solid"} />
          </ButtonWrapper>
        </SectionContainer>
        <SectionContainer>
          <SectionLabel>DETAIL</SectionLabel>
          <div className={"list-detail"}>
            <b>Detail bahan&emsp;: </b>
            <span>Baloteli kombinasi Katun</span>
            <br />
            <b>Detail baju&emsp;&emsp;: </b>
            <span>Kancing Belakang, Tali variasi tangan</span>
          </div>
        </SectionContainer>
        <SectionContainer>
          <SectionLabel>PANDUAN UKURAN</SectionLabel>
          <div className={"list-detail"}>
            <b>Warna : </b>
            <span>Black, Maroon (Red), dan Navy (Blue) (kiri ke kanan)</span>
          </div>
          {this.state.isSizeDetailExpanded ? (
            <div>
              <div className={"list-detail"}>
                <b>Size S : </b>
                <div>
                  Lingkar dada 90 cm <br />
                  Lebar bahu 36 cm <br />
                  Panjang lengan 32 cm <br />
                  Lingkar lengan 26 cm <br />
                  Panjang 90 cm <br />
                  Lingkar pinggang 92 cm <br />
                  Lingkar pinggul 98 cm
                </div>
              </div>
              <div className={"list-detail"}>
                <b>Size M : </b>
                <div>
                  Lingkar dada 94 cm <br />
                  Lebar bahu 37 cm <br />
                  Panjang lengan 32 cm <br />
                  Lingkar lengan 28 cm <br />
                  Panjang 90 cm <br />
                  Lingkar pinggang 93 cm <br />
                  Lingkar pinggul 100 cm <br />
                </div>
              </div>
              <div className={"list-detail"}>
                <b>Size L : </b>
                <div>
                  Lingkar dada 100 cm <br />
                  Lebar bahu 38 cm <br />
                  Panjang lengan 33 cm <br />
                  Lingkar lengan 30 cm <br />
                  Panjang 92 cm <br />
                  Lingkar pinggang 98 cm <br />
                  Lingkar pinggul 102 cm <br />
                </div>
              </div>
              <div className={"list-detail"}>
                <b>Size XL : </b>
                <div>
                  Lingkar dada 110 cm <br />
                  Lebar bahu 39 cm <br />
                  Panjang lengan 34 cm <br />
                  Lingkar lengan 32 cm <br />
                  Panjang 92 cm <br />
                  Lingkar pinggang 103 cm <br />
                  Lingkar pinggul 110 cm <br />
                </div>
              </div>
              <div className={"list-detail"}>Model menggunakan size M</div>
            </div>
          ) : (
            <div
              className={"expand-button"}
              onClick={() => this.setState({ isSizeDetailExpanded: true })}
            >
              Lihat Selengkapnya
            </div>
          )}
        </SectionContainer>
        <SectionContainer>
          <SectionLabel>PRODUK BISA DICOBA DAN DIKEMBALIKAN</SectionLabel>
          <div>Ya</div>
        </SectionContainer>
        <Spacer />
        <Section title={"Produk Mirip Lainnya"} notSpaced />
        <SimilarProductContainer>
          {DUMMY_DATA.newestItem.map(item => (
            <NewestItem
              image={item.image}
              productName={item.productName}
              price={item.price}
            />
          ))}
        </SimilarProductContainer>
        <Spacer />
        <Section title={"Rekomendasi Produk Lainnya"} notSpaced />
        <CatalogItem
          image={PRODUCT_IMAGE}
          productName={"Loinaya Stripe A Line Mini Dress"}
          dressSize={"S, M, L, XL"}
          price={119.0}
        />
        <CatalogItem
          image={PRODUCT_IMAGE}
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
  width: 450px;
  margin: auto;

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
  background-color: white;
`;

const ProductName = styled.div`
  font-size: 14pt;
  font-weight: bold;
  padding: 20px 20px 5px;
  background-color: white;
`;

const ProductPrice = styled.div`
  font-size: 14pt;
  font-weight: bold;
  padding: 0px 20px;
  color: rgb(170, 0, 90);
  padding-bottom: 20px;
  background-color: white;
`;

const SectionContainer = styled.div`
  border-top-style: solid;
  border-top-width: 0.3px;
  border-color: #efefef;
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  background-color: white;

  .list-detail {
    font-size: 11pt;
    margin-top: 10px;
    line-height: 25px;
  }

  .expand-button {
    font-size: 11pt;
    color: rgb(170, 0, 90);
    font-weight: bold;
    align-self: flex-end;
    cursor: pointer;
  }
`;

const SectionLabel = styled.div`
  font-size: 10pt;
  color: rgb(82, 82, 82);
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 10px 0px;
`;

const Spacer = styled.div`
  height: 20px;
`;

const SimilarProductContainer = styled.div`
  background-color: white;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 0px 10px;
`;

const DUMMY_DATA = {
  newestItem: [
    {
      image: PRODUCT_IMAGE,
      productName: "Navedr Lace Cape",
      price: 169.0
    },
    {
      image: PRODUCT_IMAGE,
      productName: "Aulidya Brukat",
      price: 169.0
    },
    {
      image: PRODUCT_IMAGE,
      productName: "Navedr Lace Cape",
      price: 169.0
    },
    {
      image: PRODUCT_IMAGE,
      productName: "Aulidya Brukat",
      price: 169.0
    }
  ]
};
