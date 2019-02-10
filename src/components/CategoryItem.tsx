import React, { Component } from "react";
import styled from "styled-components";

interface Props {
  image: string;
  categoryName: string;
}

export default (props: Props) => (
  <Container>
    <img src={props.image} />
    <span>{props.categoryName}</span>
  </Container>
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
