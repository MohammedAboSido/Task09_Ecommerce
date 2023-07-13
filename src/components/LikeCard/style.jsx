import styled from "@emotion/styled";

export const LikeCardWrapper = styled("div")`
  label: LikeCardWrapper;
  display: flex;
  gap: 0.5rem;
  width: 270px;
  cursor: pointer;
  @media (max-width: 340px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    gap: 1rem;
  }
`;

export const LikeCardImg = styled("img")`
  label: LikeCardImg;
  object-fit: contain;
  min-width: 80px;
  min-height: 80px;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  padding: 0.7rem;
  border-radius: 0.5rem;
  @media (max-width: 340px) {
    width: 100%;
  }
`;

export const LikeCardContainer = styled("div")`
  label: LikeCardContainer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.2rem;
`;

export const LikeCardTitle = styled("span")`
  label: LikeCardTitle;
  color: ${({ theme }) => theme.pallet.blackColor};
  font-size: 1rem;
  line-height: 1.5;
`;

export const LikeCardPrice = styled("span")`
  label: LikeCardPrice;
  color: ${({ theme }) => theme.pallet.greyColor2};
  font-size: 1rem;
`;
