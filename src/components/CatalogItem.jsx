import React, { Component } from "react";
import Image from "../assets/catalog_picture.jpg";
import IC_HEART from "../assets/ic_heart_inactive.png";
import Button from "./Button";
import styled from "styled-components";

export default props => (
  <Container>
    <img src={props.image} style={{ width: "100%" }} />
    <Detail>
      <div style={{ flex: 4 }}>
        <div style={{ marginBottom: "10px", fontSize: "16px" }}>
          {props.productName}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <DressSize>{props.dressSize}</DressSize>
        </div>
        <div style={{ fontWeight: "bold" }}>Rp. {props.price}</div>
      </div>
      <ButtonContainer>
        <div className={"content"}>
          <button>
            <img src={IC_HEART} />
          </button>
          <Button />
        </div>
      </ButtonContainer>
    </Detail>
  </Container>
);

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

const Detail = styled.div`
  display: flex;
  padding: 20px;
  flex: 1;
`;

const DressSize = styled.span`
  background-color: rgb(232, 232, 232);
  padding: 5px;
  color: rgb(142, 142, 142);
  font-size: 12px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    border-color: transparent;
  }

  img {
    object-fit: contain;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;
