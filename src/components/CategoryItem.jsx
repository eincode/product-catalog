import React, { Component } from "react";
import styled from "styled-components";

import IMAGE from "../assets/category_image.jpg";

export default class CategoryItem extends Component {
  render() {
    return (
      <Container>
        <img src={IMAGE} />
        <span>MINI DRESS</span>
      </Container>
    );
  }
}

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
