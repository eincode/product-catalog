import React, { Component } from "react";
import styled from "styled-components";
import Link from "./Link";

interface Props {
  image: string;
  categoryName: string;
  id: number;
}

export default (props: Props) => (
  <Link
    to={{
      pathname: `/browse`,
      search: `categoryId=${props.id}`,
      state: {
        productName: props.categoryName
      }
    }}
    style={{ textDecoration: "none", color: "black" }}
  >
    <Container>
      <img src={props.image} />
      <span>{props.categoryName}</span>
    </Container>
  </Link>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  span {
    margin-top: 5px;
    font-size: 8pt;
    font-weight: 500;
  }
`;
