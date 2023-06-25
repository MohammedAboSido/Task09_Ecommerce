import styled from "@emotion/styled";

export const MainProductCardWrapper = styled("div")`
  label: MainProductCardWrapper;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-bottom: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  cursor: pointer;
  flex: 1 200px;
  height: 100%;
  @media (max-width: 1200px) {
    border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
    height: 100px;
  }
  &:hover > img {
    transform: scale(1.09);
  }
`;

export const MainProductCardContainer = styled("div")`
  label: MainProductCardContainer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MainProductCardTitle = styled("span")`
  label: MainProductCardTitle;
`;

export const MainProductCardPrice = styled("span")`
  label: MainProductCardPrice;
  width: 60%;
  color: ${({ theme }) => theme.pallet.greyColor};
  font-size: 0.9rem;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const MainProductCardImg = styled("img")`
  label: MainProductCardImg;
  transition: all 0.3s linear;
  max-width: 75px;
  max-height: 75px;
`;
