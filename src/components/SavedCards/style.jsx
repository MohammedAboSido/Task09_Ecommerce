import styled from "@emotion/styled";

export const SavedCardsWrapper = styled("div")`
  label: SavedCardsWrapper;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  flex: 1 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: pointer;
`;

export const SavedCardsTitle = styled("h3")`
  label: SavedCardsTitle;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const SavedCardsContainer = styled("div")`
  label: SavedCardsContainer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 1070px) {
    gap: 2.5rem;
  }
`;
