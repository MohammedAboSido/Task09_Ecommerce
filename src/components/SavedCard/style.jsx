import styled from "@emotion/styled";

export const SavedCardWrapper = styled("div")`
  label: SavedCardWrapper;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  flex: 1 200px;
  @media (max-width: 1070px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const SavedCardImg = styled("img")`
  label: SavedCardImg;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.pallet.greyColor2};
  padding: 1rem;
  border-radius: 5px;
  object-fit: contain;
  @media (max-width: 300px) {
    width: 100%;
    height: 100%;
  }
`;

export const SavedCardContainer = styled("div")`
  label: SavedCardContainer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > button {
    color: ${({ theme }) => theme.pallet.blueColor};
    background-color: white;
    font-weight: 500;
    width: fit-content;
    padding-left: 2.5rem;
    padding-right: 1.3rem;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
    :hover {
      color: ${({ theme }) => theme.pallet.blueColor};
    }

    @media (max-width: 1070px) {
      align-self: center;
    }
  }
`;

export const SavedCardPrice = styled("span")`
  label: SavedCardPrice;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const SavedCardDescription = styled("div")`
  label: SavedCardDescription;
  color: ${({ theme }) => theme.pallet.greyColor};
`;
