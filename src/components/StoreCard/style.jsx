import styled from "@emotion/styled";

export const StoreCardWrapper = styled("div")`
  label: StoreCardWrapper;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  display: flex;
  gap: 0.5rem;
  flex: 1 250px;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const StoreCardImg = styled("img")`
  label: StoreCardImg;
  height: 230px;
  min-width: 230px;
  object-fit: contain;
  align-self: center;
  padding: 2rem 1rem;
  @media (max-width: 280px) {
    height: 180px;
    min-width: 180px;
  }
`;

export const StoreCardContainer = styled("div")`
  label: StoreCardContainer;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StoreCardDetails = styled("div")`
  label: StoreCardDetails;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
export const StoreCardTitle = styled("span")`
  label: StoreCardTitle;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const StoreCardPrice = styled("div")`
  label: StoreCardPrice;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StoreCardNewPrice = styled("span")`
  label: StoreCardNewPrice;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const StoreCardOldPrice = styled("span")`
  label: StoreCardOldPrice;
  color: ${({ theme }) => theme.pallet.greyColor4};
  font-weight: 600;
  text-decoration: line-through;
`;

export const StoreCardReact = styled("div")`
  label: StoreCardReact;
  position: relative;
  top: -10px;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.pallet.blueColor};

  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  @media (max-width: 1024px) {
    position: initial;
  }
  & > svg {
    font-size: 1.7rem;
  }
`;

export const StoreCardRate = styled("div")`
  label: StoreCardRate;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: orange;
  & > svg {
    color: ${({ theme }) => theme.pallet.greyColor2};
    font-size: 10px;
  }
`;

export const StoreCardOrder = styled("span")`
  label: StoreCardOrder;
  color: ${({ theme }) => theme.pallet.greyColor};
`;
export const StoreCardShipping = styled("span")`
  label: StoreCardShipping;
  color: ${({ theme }) => theme.pallet.greenColor};
`;

export const StoreCardStars = styled("div")`
  label: StoreCardStars;
  & > svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
  & > :last-child {
    color: ${({ theme }) => theme.pallet.greyColor};
  }
`;

export const StoreCardScore = styled("span")`
  label: StoreCardScore;
`;

export const StoreCardDescription = styled("span")`
  label: StoreCardDescription;
  color: ${({ theme }) => theme.pallet.greyColor};
  line-height: 1.5;
  width: 100%;
`;
export const StoreCardLink = styled("span")`
  label: StoreCardLink;
  cursor: pointer;
  color: ${({ theme }) => theme.pallet.blueColor};
  font-weight: 500;
`;
