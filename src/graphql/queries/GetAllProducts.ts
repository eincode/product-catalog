import gql from "graphql-tag";

export const GetAllProductsQuery = gql`
  query GetAllProducts($lastIndex: Int!) {
    product(limit: 3, offset: $lastIndex) {
      id
      name
      price
      image
    }
  }
`;

export interface GetAllProducts {
  product: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
  }>;
}

export interface GetAllProductsVariables {
  lastIndex: number;
}
