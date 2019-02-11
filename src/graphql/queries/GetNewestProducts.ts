import gql from "graphql-tag";

import { GetAllProductsResponse } from "./GetAllProducts";

export const GetNewestProductsQuery = gql`
  query GetNewestProductsQuery {
    product(limit: 2, order_by: { id: desc }) {
      id
      name
      price
      image
    }
  }
`;

export interface GetNewestProductsResponse extends GetAllProductsResponse {}
