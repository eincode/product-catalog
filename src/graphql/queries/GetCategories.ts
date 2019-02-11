import gql from "graphql-tag";

export const GetCategoriesQuery = gql`
  query GetCategories {
    category {
      id
      name
      image
    }
  }
`;

export interface GetCategoriesResponse {
  category: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}
