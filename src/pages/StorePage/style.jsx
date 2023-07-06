import styled from "@emotion/styled";

export const StorePageWrapper = styled("div")`
  label: StorePageWrapper;
  background-color: ${({ theme }) => theme.pallet.greyColor3};
`;
export const StorePageRoutes = styled("div")`
  label: StorePageRoutes;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 0.5rem;
`;
export const StorePageRoute = styled("span")`
  label: StorePageRoute;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.pallet.greyColor4};
  & > svg {
    font-size: 1.4rem;
  }
`;
export const StorePageContainer = styled("div")`
  label: StorePageContainer;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 790px) {
    flex-wrap: wrap;
  }
`;
export const StorePageLeft = styled("div")`
  label: StorePageLeft;
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
export const StorePageRight = styled("div")`
  label: StorePageRight;
  width: 78%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  @media screen and (max-width: 790px) {
    width: 100%;
  }
`;
