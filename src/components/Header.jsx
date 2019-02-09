import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <h1>Product Catalog</h1>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: calc(450px - 40px);
  align-items: center;
  background-color: white;
  margin: 0px auto 5px;
  padding: 0px 20px;

  h1 {
    color: rgb(82, 82, 82);
    font-size: 14pt;
  }

  @media only screen and (max-width: 425px) {
    h1 {
      margin-left: 20px;
    }
  }
`;
