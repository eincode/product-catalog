import gql from "graphql-tag";

export const GetAllProductsQuery = gql`
  query GetAllProducts(
    $lastIndex: Int
    $categoryId: Int
    $sortByNewest: Boolean
    $lessThan: Int
    $greaterThan: Int
    $query: String
  ) {
    product(
      limit: 3
      offset: $lastIndex
      where: {
        category_id: { _eq: $categoryId }
        price: { _lt: $lessThan, _gt: $greaterThan }
        name: { _ilike: $query }
      }
    ) {
      id
      name
      price
      image
    }
  }
`;

export const GetAllNewestProductsQuery = gql`
  query GetAllNewestProducts(
    $lastIndex: Int
    $categoryId: Int
    $sortByNewest: Boolean
  ) {
    product(
      limit: 3
      offset: $lastIndex
      where: { category_id: { _eq: $categoryId } }
      order_by: { id: desc }
    ) {
      id
      name
      price
      image
    }
  }
`;

export interface GetAllProductsResponse {
  product: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
  }>;
}

export interface GetAllProductsVariables {
  lastIndex?: number;
  categoryId?: number;
  sortByNewest?: boolean;
  greaterThan?: number;
  lessThan?: number;
  query?: string;
}
