import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>Product Catalog</Title>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  min-width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom-width: 0.03em;
  border-color: grey;
  border-bottom-style: solid;
`;

const Title = styled.h1`
  color: rgb(82, 82, 82);
  font-size: 16pt;
`;
