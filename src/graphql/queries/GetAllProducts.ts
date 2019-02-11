import gql from "graphql-tag";

export const GetAllProductsQuery = gql`
  query GetAllProducts($lastIndex: Int, $categoryId: Int) {
    product(
      limit: 3
      offset: $lastIndex
      where: { category_id: { _eq: $categoryId } }
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
}
