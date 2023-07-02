import styled from "@emotion/styled";

export const ProductsPageWrapper = styled("div")`
  label: ProductsPageWrapper;
  background-color: ${({ theme }) => theme.pallet.greyColor3};
`;
export const ProductsPageRoutes = styled("div")`
  label: ProductsPageRoutes;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 0.5rem;
`;
export const ProductsPageRoute = styled("span")`
  label: ProductsPageRoute;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.pallet.greyColor4};
  & > svg {
    font-size: 1.4rem;
  }
`;
export const ProductsPageContainer = styled("div")`
  label: ProductsPageContainer;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 790px) {
    flex-wrap: wrap;
  }
`;
export const ProductsPageLeft = styled("div")`
  label: ProductsPageLeft;
  width: 22%;

  @media screen and (max-width: 900px) {
    width: 20%;
  }
  @media screen and (max-width: 790px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ProductsPageRight = styled("div")`
  label: ProductsPageRight;
  width: 78%;
  display: flex;
  gap: 1.3rem;
  flex-wrap: wrap;
  @media screen and (max-width: 790px) {
    width: 100%;
  }
`;
