import React from "react";
import styled from "styled-components";

import IC_HEART from "../assets/ic_heart_inactive.png";
import Link from "./Link";

interface Props {
  image: string;
  productName: string;
  price: number;
  id: number;
}

export default (props: Props) => (
  <Link
    to={{
      pathname: `/product/${props.id}`,
      state: {
        productName: props.productName
      }
    }}
    style={{ textDecoration: "none", color: "black" }}
  >
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
  </Link>
);

const Container = styled.div`
  width: calc(100% - 10px);
  margin: 5px 5px;
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
