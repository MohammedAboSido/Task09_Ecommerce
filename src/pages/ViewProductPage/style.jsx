import styled from "@emotion/styled";

export const ViewProductPageWrapper = styled("div")`
  label: ViewProductPageWrapper;
  background-color: ${({ theme }) => theme.pallet.greyColor3};
`;
export const ViewProductRoutes = styled("div")`
  label: ViewProductRoutes;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 0.5rem;
`;
export const ViewProductRoute = styled("span")`
  label: ViewProductRoute;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.pallet.greyColor4};
  & > svg {
    font-size: 1.4rem;
  }
`;
export const ViewProductPageTitle = styled("h3")`
  label: ViewProductPageTitle;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0;
`;

export const ViewProductPageFirstFloor = styled("div")`
  label: ViewProductPageFirstFloor;
  display: flex;
  gap: 1.4rem;
  flex-wrap: wrap;
`;

export const ViewProductPagePayment = styled("div")`
  label: ViewProductPagePayment;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1040px) {
    flex: 1 400px;
  }
`;
