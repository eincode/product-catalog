import gql from "graphql-tag";

export const GetAllProducts = gql`
  query GetAllProducts($lastIndex: Int!) {
    product(limit: 3, offset: $lastIndex) {
      id
      name
      price
      image
    }
  }
`;
