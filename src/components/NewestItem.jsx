import React, { Component } from "react";
import styled from "styled-components";

import IC_HEART from "../assets/ic_heart_inactive.png";

export default props => (
  <Container>
    <img src={props.image} />
    <Detail>
      <div style={{ flex: 4, flexDirection: "column" }}>
        <div style={{ marginBottom: "5px" }}>{props.productName}</div>
        <div>Rp. {props.price}</div>
      </div>
      <IconContainer>
        <img src={IC_HEART} />
      </IconContainer>
    </Detail>
  </Container>
);

const Container = styled.div`
  width: 50%;
  margin: 0px 5px;
  flex-direction: column;
  display: flex;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Detail = styled.div`
  display: flex;
  font-size: 10pt;
  flex-direction: row;
  margin-top: 10px;
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    align-self: center;
  }
`;

const IconContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-right: 5px;
`;
