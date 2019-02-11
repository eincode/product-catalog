import React, { Component } from "react";
import { Query } from "react-apollo";
import Observer from "@researchgate/react-intersection-observer";

import {
  GetAllProductsResponse,
  GetAllProductsVariables,
  GetAllProductsQuery,
  GetAllNewestProductsQuery
} from "../graphql/queries/GetAllProducts";
import ActivityIndicator from "./ActivityIndicator";
import CatalogItem from "./CatalogItem";
import styled from "styled-components";

interface Props {
  categoryId?: number;
  sortByNewest?: boolean;
  greaterThan?: number;
  lessThan?: number;
}

interface State {
  lastIndex: number;
}

export default class CatalogList extends Component<Props, State> {
  state = {
    lastIndex: 0
  };

  handleChange(isIntersecting: boolean, iteration: number) {
    if (isIntersecting && iteration === this.state.lastIndex / 3) {
      this.setState({ lastIndex: this.state.lastIndex += 3 });
    }
  }

  getItems() {
    console.log(this.state);
    const items = [];
    for (let i = 0; i <= this.state.lastIndex / 3; i++) {
      items.push(
        <Query<GetAllProductsResponse, GetAllProductsVariables>
          query={
            this.props.sortByNewest
              ? GetAllNewestProductsQuery
              : GetAllProductsQuery
          }
          variables={{ lastIndex: i * 3, ...this.props }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            } else if (error) {
              return <div>{error.message}</div>;
            } else if (data) {
              if (data.product.length > 0) {
                return (
                  <Observer
                    onChange={({ isIntersecting }) =>
                      this.handleChange(isIntersecting, i)
                    }
                    threshold={0.25}
                  >
                    <div>
                      {data.product.map(item => (
                        <CatalogItem
                          image={item.image}
                          productName={item.name}
                          dressSize={"S, M, L, XL"}
                          price={item.price}
                          key={item.id}
                          id={item.id}
                        />
                      ))}
                    </div>
                  </Observer>
                );
              }
              return <End>That's all!</End>;
            }
          }}
        </Query>
      );
    }
    return items;
  }

  render() {
    return <div>{this.getItems().map(item => item)}</div>;
  }
}

const End = styled.div`
  text-align: center;
  margin: 20px;
`;
