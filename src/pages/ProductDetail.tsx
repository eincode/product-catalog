import React, { Component } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Section from "../components/Section";
import NewestItem from "../components/NewestItem";
import { RouteComponentProps } from "react-router";
import { Query } from "react-apollo";

import {
  GetProductByIdQuery,
  GetProductByIdResponse,
  GetProductByIdVariables
} from "../graphql/queries/GetProductById";
import {
  GetProductRecommendationQuery,
  GetProductRecommendationResponse,
  GetProductRecommendationVariables
} from "../graphql/queries/GetProductRecommendation";

import ActivityIndicator from "../components/ActivityIndicator";
import CatalogList from "../components/CatalogList";

interface State {
  isSizeDetailExpanded: boolean;
}

export default class ProductDetail extends Component<
  RouteComponentProps<any>,
  State
> {
  state = {
    isSizeDetailExpanded: false
  };

  render() {
    console.log(this.props);
    return (
      <Query<GetProductByIdResponse, GetProductByIdVariables>
        query={GetProductByIdQuery}
        variables={{ id: this.props.match.params.productId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          else if (error) return <div>{error.message}</div>;
          else if (data) {
            const product = data.product[0];
            return (
              <Container>
                <ProductImage src={product.image} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>Rp. {product.price}</ProductPrice>
                <SectionContainer>
                  <SectionLabel>BAHAN UTAMA</SectionLabel>
                  <div>{product.base_material}</div>
                </SectionContainer>
                <SectionContainer>
                  <div>Pilih warna yang tersedia</div>
                  <ButtonWrapper>
                    {product.product_color.map(item => (
                      <Button label={item} type={"inactive"} />
                    ))}
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
                  <ButtonWrapper>
                    <Button label={"Simpan"} type={"inactive"} />
                    <Button label={"Beli Sekarang"} type={"solid"} />
                  </ButtonWrapper>
                </SectionContainer>
                {product.product_detail && (
                  <SectionContainer>
                    <div className={"list-detail"}>
                      <div>
                        <SectionLabel>DETAIL</SectionLabel>
                        {product.product_detail.material_detail && (
                          <div>
                            <b>Detail bahan&emsp;: </b>
                            <span>
                              {product.product_detail.material_detail}
                            </span>
                            <br />
                          </div>
                        )}
                        {product.product_detail.dress_detail && (
                          <div>
                            <b>Detail baju&emsp;: </b>
                            <span>{product.product_detail.dress_detail}</span>
                            <br />
                          </div>
                        )}
                      </div>
                    </div>
                  </SectionContainer>
                )}
                <SectionContainer>
                  <SectionLabel>PANDUAN UKURAN</SectionLabel>
                  <div className={"list-detail"}>
                    <b>Warna : </b>
                    <span>{product.product_color.join(", ")}</span>
                  </div>
                  {this.state.isSizeDetailExpanded ? (
                    <div>
                      <div className={"list-detail"}>
                        <b>Size S : </b>
                        <div>
                          {product.size_guide.size_s.chest_circle && (
                            <div>
                              Lingkar dada{" "}
                              {product.size_guide.size_s.chest_circle} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_s.shoulder_width && (
                            <div>
                              Lebar bahu{" "}
                              {product.size_guide.size_s.shoulder_width} cm{" "}
                              <br />
                            </div>
                          )}
                          {product.size_guide.size_s.arm_length && (
                            <div>
                              Panjang lengan{" "}
                              {product.size_guide.size_s.arm_length} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_s.arm_circle && (
                            <div>
                              Lingkar lengan{" "}
                              {product.size_guide.size_s.arm_circle} cm <br />
                            </div>
                          )}
                          Panjang {product.size_guide.size_s.length} cm <br />
                          {product.size_guide.size_s.waist_circle && (
                            <div>
                              Lingkar pinggang{" "}
                              {product.size_guide.size_s.waist_circle} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_s.hip_circle && (
                            <div>
                              Lingkar pinggul{" "}
                              {product.size_guide.size_s.hip_circle} cm <br />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={"list-detail"}>
                        <b>Size M : </b>
                        <div>
                          {product.size_guide.size_m.chest_circle && (
                            <div>
                              Lingkar dada{" "}
                              {product.size_guide.size_m.chest_circle} cm <br />
                            </div>
                          )}
                          Lingkar dada {product.size_guide.size_m.length} cm{" "}
                          <br />
                          {product.size_guide.size_m.shoulder_width && (
                            <div>
                              Lebar bahu{" "}
                              {product.size_guide.size_m.shoulder_width} cm{" "}
                              <br />
                            </div>
                          )}
                          {product.size_guide.size_m.arm_length && (
                            <div>
                              Panjang lengan{" "}
                              {product.size_guide.size_m.arm_length} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_m.arm_circle && (
                            <div>
                              Lingkar lengan{" "}
                              {product.size_guide.size_m.arm_circle} cm <br />
                            </div>
                          )}
                          Panjang {product.size_guide.size_m.length} cm <br />
                          {product.size_guide.size_m.waist_circle && (
                            <div>
                              Lingkar pinggang{" "}
                              {product.size_guide.size_m.waist_circle} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_m.hip_circle && (
                            <div>
                              Lingkar pinggul{" "}
                              {product.size_guide.size_m.hip_circle} cm <br />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={"list-detail"}>
                        <b>Size L : </b>
                        <div>
                          {product.size_guide.size_l.chest_circle && (
                            <div>
                              Lingkar dada{" "}
                              {product.size_guide.size_l.chest_circle} cm <br />
                            </div>
                          )}
                          Lingkar dada {product.size_guide.size_l.length} cm{" "}
                          <br />
                          {product.size_guide.size_l.shoulder_width && (
                            <div>
                              Lebar bahu{" "}
                              {product.size_guide.size_l.shoulder_width} cm{" "}
                              <br />
                            </div>
                          )}
                          {product.size_guide.size_l.arm_length && (
                            <div>
                              Panjang lengan{" "}
                              {product.size_guide.size_l.arm_length} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_l.arm_circle && (
                            <div>
                              Lingkar lengan{" "}
                              {product.size_guide.size_l.arm_circle} cm <br />
                            </div>
                          )}
                          Panjang {product.size_guide.size_l.length} cm <br />
                          {product.size_guide.size_l.waist_circle && (
                            <div>
                              Lingkar pinggang{" "}
                              {product.size_guide.size_l.waist_circle} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_l.hip_circle && (
                            <div>
                              Lingkar pinggul{" "}
                              {product.size_guide.size_l.hip_circle} cm <br />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={"list-detail"}>
                        <b>Size XL : </b>
                        <div>
                          {product.size_guide.size_xl.chest_circle && (
                            <div>
                              Lingkar dada{" "}
                              {product.size_guide.size_xl.chest_circle} cm{" "}
                              <br />
                            </div>
                          )}
                          Lingkar dada {product.size_guide.size_xl.length} cm{" "}
                          <br />
                          {product.size_guide.size_xl.shoulder_width && (
                            <div>
                              Lebar bahu{" "}
                              {product.size_guide.size_xl.shoulder_width} cm{" "}
                              <br />
                            </div>
                          )}
                          {product.size_guide.size_xl.arm_length && (
                            <div>
                              Panjang lengan{" "}
                              {product.size_guide.size_xl.arm_length} cm <br />
                            </div>
                          )}
                          {product.size_guide.size_xl.arm_circle && (
                            <div>
                              Lingkar lengan{" "}
                              {product.size_guide.size_xl.arm_circle} cm <br />
                            </div>
                          )}
                          Panjang {product.size_guide.size_xl.length} cm <br />
                          {product.size_guide.size_xl.waist_circle && (
                            <div>
                              Lingkar pinggang{" "}
                              {product.size_guide.size_xl.waist_circle} cm{" "}
                              <br />
                            </div>
                          )}
                          {product.size_guide.size_xl.hip_circle && (
                            <div>
                              Lingkar pinggul{" "}
                              {product.size_guide.size_xl.hip_circle} cm <br />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={"expand-button"}
                      onClick={() =>
                        this.setState({ isSizeDetailExpanded: true })
                      }
                    >
                      Lihat Selengkapnya
                    </div>
                  )}
                </SectionContainer>
                <SectionContainer>
                  <SectionLabel>
                    PRODUK BISA DICOBA DAN DIKEMBALIKAN
                  </SectionLabel>
                  <div>Ya</div>
                </SectionContainer>
                <Spacer />
                <Section title={"Produk Mirip Lainnya"} notSpaced />
                <SimilarProductContainer>
                  <Query<
                    GetProductRecommendationResponse,
                    GetProductRecommendationVariables
                  >
                    query={GetProductRecommendationQuery}
                    variables={{ currentProductId: product.id }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <ActivityIndicator />;
                      else if (error) return <div>{error.message}</div>;
                      else if (data) {
                        const recommendations = data.product;
                        return recommendations.map(item => (
                          <NewestItem
                            image={item.image}
                            productName={item.name}
                            price={item.price}
                            key={item.id}
                            id={item.id}
                          />
                        ));
                      }
                    }}
                  </Query>
                </SimilarProductContainer>
                <Spacer />
                <Section title={"Rekomendasi Produk Lainnya"} notSpaced />
                <CatalogList />
              </Container>
            );
          }
        }}
      </Query>
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
