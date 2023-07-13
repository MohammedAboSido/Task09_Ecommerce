import styled from "@emotion/styled";

export const RecommendedCardWrapper = styled("div")`
  label: RecommendedCardWrapper;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  padding: 0.5rem;
  padding-top: 1rem;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  flex: 1 200px;
  height: 300px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
export const RecommendedCardImg = styled("img")`
  label: RecommendedCardImg;
  align-self: center;
  object-fit: contain;
  width: 170px;
  height: 170px;
`;
export const RecommendedCardPrice = styled("span")`
  label: RecommendedCardPrice;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.pallet.blackColor};
`;
export const RecommendedCardTitle = styled("span")`
  label: RecommendedCardTitle;
  color: ${({ theme }) => theme.pallet.greyColor};
  width: 75%;
`;
