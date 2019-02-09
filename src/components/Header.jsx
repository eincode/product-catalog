import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import IC_SEARCH from "../assets/ic_search.png";
import IC_BACK from "../assets/ic_back.png";

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <div>
          {typeof this.props.location.state !== "undefined" ? (
            <button onClick={() => this.props.history.goBack()}>
              <img src={IC_BACK} />
            </button>
          ) : null}
          <h1>
            {typeof this.props.location.state === "undefined"
              ? "Product Catalog"
              : this.props.location.state.productName}
          </h1>
          <button>
            <img src={IC_SEARCH} />
          </button>
        </div>
      </Container>
    );
  }
}

export default withRouter(Header);

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: white;
  padding: 0px;
  position: fixed;
  justify-content: center;
  top: 0;

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

  div {
    width: calc(450px - 40px);
    display: flex;
    padding: 0px 20px;
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
