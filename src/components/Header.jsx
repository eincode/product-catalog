import React, { Component } from "react";
import styled from "styled-components";
import IC_SEARCH from "../assets/ic_search.png";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <h1>Product Catalog</h1>
        <button>
          <img src={IC_SEARCH} />
        </button>
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
    flex: 1;
  }

  button {
    background-color: transparent;
    border-color: transparent;
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media only screen and (max-width: 425px) {
    h1 {
      margin-left: 20px;
    }
  }
`;

// gini
const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const HoverMenu = styled.div`
  background: #1f3f72;
  display: none;
  position: absolute;
  padding: 8px;
  top: 88px;
  ${LogoContainer}:hover & {
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  }

  a {
    color: white;
    text-decoration: none;
    margin: 4px 2px;
  }
`;
