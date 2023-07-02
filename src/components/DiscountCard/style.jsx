import styled from "@emotion/styled";

export const DiscountCardWrapper = styled("div")`
  label: DiscountCardWrapper;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 250px;
  @media screen and (max-width: 900px) {
    flex: 1 150px;
  }
  @media screen and (max-width: 280px) {
    width: 150px;
  }
`;

export const DiscountCardImg = styled("img")`
  label: DiscountCardImg;
  height: 250px;
  width: 250px;
  object-fit: contain;
  align-self: center;
  padding: 2rem 1rem;
`;

export const DiscountCardContainer = styled("div")`
  label: DiscountCardContainer;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DiscountCardDetails = styled("div")`
  label: DiscountCardDetails;
  display: flex;
  justify-content: space-between;
`;

export const DiscountCardPrice = styled("div")`
  label: DiscountCardPrice;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DiscountCardNewPrice = styled("span")`
  label: DiscountCardNewPrice;
  font-weight: 600;
  font-size: 1.4rem;
`;

export const DiscountCardOldPrice = styled("span")`
  label: DiscountCardOldPrice;
  color: ${({ theme }) => theme.pallet.greyColor4};
  font-weight: 600;
  text-decoration: line-through;
`;

export const DiscountCardReact = styled("div")`
  label: DiscountCardReact;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.pallet.blueColor};
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  & > svg {
    font-size: 1.7rem;
  }
`;

export const DiscountCardRate = styled("div")`
  label: DiscountCardRate;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: orange;
`;

export const DiscountCardStars = styled("div")`
  label: DiscountCardStars;
  & > svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
  & > :last-child {
    color: ${({ theme }) => theme.pallet.greyColor};
  }
`;

export const DiscountCardScore = styled("span")`
  label: DiscountCardScore;
`;

export const DiscountCardDescription = styled("span")`
  label: DiscountCardDescription;
  color: ${({ theme }) => theme.pallet.greyColor6};
  padding-bottom: 1.5rem;
`;
