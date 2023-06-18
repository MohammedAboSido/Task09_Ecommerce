import styled from "@emotion/styled";

export const ProductsLinksWrapper = styled("div")`
  label: ProductsLinksWrapper;
  width: 22%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  @media (max-width: 1285px) {
    width: 35%;
  }
  @media (max-width: 683px) {
    flex: 1 50%;
  }
`;
