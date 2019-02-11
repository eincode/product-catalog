import gql from "graphql-tag";

export const GetProductByIdQuery = gql`
  query GetProductById($id: Int!) {
    product(where: { id: { _eq: $id } }) {
      base_material
      id
      image
      name
      price
      product_color
      product_detail
      size_guide
      testable
    }
  }
`;

export interface GetProductByIdResponse {
  product: Array<Product>;
}

export interface GetProductByIdVariables {
  id: number;
}

interface Product {
  base_material: string;
  id: number;
  image: string;
  name: string;
  price: number;
  product_color: string[];
  product_detail: ProductDetail | null;
  size_guide: SizeGuide;
  testable: boolean;
}

interface ProductDetail {
  dress_detail?: string;
  material_detail?: string;
}

interface SizeGuide {
  size_m: Size;
  size_xl: Size;
  size_l: Size;
  size_s: Size;
  [key: string]: Size;
}

interface Size {
  length: number;
  chest_circle?: number;
  arm_length?: number;
  waist_circle?: number;
  arm_circle?: number;
  hip_circle?: number;
  shoulder_width?: number;
}
