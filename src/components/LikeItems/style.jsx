import styled from "@emotion/styled";

export const LikeItemsWrapper = styled("div")`
  label: LikeItemsWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 1rem;
  flex: 1 270px;
  @media (max-width: 340px) {
    gap: 2rem;
  }
`;

export const LikeItemsTitle = styled("h3")`
  label: LikeItemsTitle;
  font-weight: 600;
  color: ${({ theme }) => theme.pallet.blackColor};
  font-size: 1.1rem;
`;

export const LikeItemsContainer = styled("div")`
  label: LikeItemsContainer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
