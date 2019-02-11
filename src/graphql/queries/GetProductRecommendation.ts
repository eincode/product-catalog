import gql from "graphql-tag";

export const GetProductRecommendationQuery = gql`
  query GetProductRecommendation($currentProductId: Int!) {
    product(limit: 4, offset: $currentProductId) {
      id
      name
      image
      price
    }
  }
`;

export interface GetProductRecommendationResponse {
  product: Array<{
    id: number;
    image: string;
    name: string;
    price: number;
  }>;
}

export interface GetProductRecommendationVariables {
  currentProductId: number;
}
