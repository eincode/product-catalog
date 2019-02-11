import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";
import IC_SEARCH from "../assets/ic_search.png";
import IC_BACK from "../assets/ic_back.png";
import Link from "./Link";

interface State {
  searchQuery: string;
  isSearchBarVisible: boolean;
}

class Header extends Component<RouteComponentProps<any>, State> {
  state = {
    searchQuery: "",
    isSearchBarVisible: false
  };

  onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.setState({ isSearchBarVisible: false });
      this.props.history.push({
        pathname: "/browse",
        search: `query=%${this.state.searchQuery}%`,
        state: { page: "browse" }
      });
    }
  };

  render() {
    return (
      <Container>
        <div className={"header-area"}>
          {typeof this.props.location.state !== "undefined" ? (
            <button onClick={() => this.props.history.goBack()}>
              <img src={IC_BACK} />
            </button>
          ) : null}
          <h1>
            <Link to={"/"}>
              {typeof this.props.location.state === "undefined"
                ? "Product Catalog"
                : this.props.location.state.productName || "Product Catalog"}
            </Link>
          </h1>
          <button onClick={() => this.setState({ isSearchBarVisible: true })}>
            <img src={IC_SEARCH} />
          </button>
          {this.state.isSearchBarVisible && (
            <SearchBar>
              <input
                placeholder={"Search and hit enter..."}
                onKeyPress={this.onKeyPress}
                onChange={event =>
                  this.setState({ searchQuery: event.target.value })
                }
              />
            </SearchBar>
          )}
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

  .header-area {
    width: calc(450px - 40px);
    display: flex;
    padding: 0px 20px;
  }
`;

const SearchBar = styled.div`
  position: absolute;
  top: 50px;
  right: calc(50% - 205px);
  background-color: white;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  width: 15%;
  height: 45px;
  display: flex;

  input {
    width: 100%;
    flex: 1;
    padding: 10px;
    border-color: transparent;
  }
`;
