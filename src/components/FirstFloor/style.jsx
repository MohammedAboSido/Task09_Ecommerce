import styled from "@emotion/styled";

export const FirstFloorWrapper = styled("div")`
  label: FirstFloorWrapper;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  margin: 1.3rem 0;
  flex-wrap: wrap;
  @media (max-width: 1285px) {
  }
`;
export const FirstFloorCards = styled("div")`
  label: FirstFloorCards;
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 1285px) {
    width: 100%;
    flex-direction: row;
  }
  @media (max-width: 683px) {
    flex: 1;
  }
`;
