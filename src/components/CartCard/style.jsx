import styled from "@emotion/styled";

export const CartCardWrapper = styled("div")`
  label: CartCardWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  gap: 1rem;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;

export const CartCardLeft = styled("div")`
  label: CartCardLeft;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

export const CartCardImg = styled("img")`
  label: CartCardImg;
  width: 80px;
  height: 80px;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  background-color: ${({ theme }) => theme.pallet.greyColor3};
  border-radius: 5px;
  object-fit: contain;
  @media (max-width: 350px) {
    align-self: center;
  }
`;

export const CartCardLeftContainer = styled("div")`
  label: CartCardLeftContainer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CartCardTitle = styled("h3")`
  label: CartCardTitle;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.pallet.blackColor};
  @media (max-width: 350px) {
    text-align: center;
  }
`;

export const CartCardDetails = styled("span")`
  label: CartCardDetails;
  color: ${({ theme }) => theme.pallet.greyColor4};
  width: 75%;
  line-height: 1.5;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    text-align: center;
  }
`;

export const CartCardButtons = styled("div")`
  label: CartCardButtons;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CartCardRemoveBtn = styled("button")`
  label: CartCardRemoveBtn;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-weight: 500;
  background-color: white;
  color: ${({ theme }) => theme.pallet.redColor};
  &:hover {
    background-color: ${({ theme }) => theme.pallet.greyColor7};
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const CartCardSaveBtn = styled("button")`
  label: CartCardSaveBtn;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-weight: 500;
  background-color: white;
  color: ${({ theme }) => theme.pallet.blueColor};
  &:hover {
    background-color: ${({ theme }) => theme.pallet.greyColor7};
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const CartCardRight = styled("div")`
  label: CartCardRight;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-end;
  @media (max-width: 1040px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: self-start;
  }
`;
export const CartCardPrice = styled("span")`
  label: CartCardPrice;
  font-weight: 500;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const CartCardCounts = styled("select")`
  label: CartCardCounts;
  transition: all 0.3s ease-in-out;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  outline: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  cursor: pointer;
  width: 130px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const CartCardCount = styled("option")`
  label: CartCardCount;
`;
