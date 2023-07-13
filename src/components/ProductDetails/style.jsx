import styled from "@emotion/styled";

export const ProductDetailsWrapper = styled("div")`
  label: ProductDetailsWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1 35%;
  @media (max-width: 1020px) {
    flex: 1 500px;
  }
`;

export const ProductDetailsStatus = styled("div")`
  label: ProductDetailsStatus;
  color: ${({ theme }) => theme.pallet.greenColor};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ProductDetailsStatusName = styled("span")`
  label: ProductDetailsStatusName;
  font-size: 1.1rem;
`;
export const ProductDetailsTitle = styled("h3")`
  label: ProductDetailsTitle;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const StoreCardRate = styled("div")`
  label: StoreCardRate;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: orange;
`;
export const StoreCardContainer = styled("div")`
  label: StoreCardContainer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    color: ${({ theme }) => theme.pallet.greyColor2};
    font-size: 10px;
  }

  .messageOutlinedIcon,
  .shoppingBasketOutlinedIcon {
    font-size: 20px;
    color: ${({ theme }) => theme.pallet.greyColor};
  }
`;

export const StoreCardOrder = styled("span")`
  label: StoreCardOrder;
  color: ${({ theme }) => theme.pallet.greyColor};
`;
export const StoreCardShipping = styled("span")`
  label: StoreCardShipping;
  color: ${({ theme }) => theme.pallet.greyColor};
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

export const ProductDetailsPrices = styled("div")`
  label: ProductDetailsPrices;
  background-color: ${({ theme }) => theme.pallet.redColor3};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  & > :last-child {
    border-right: none;
  }
  @media (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductDetailsPricesItem = styled("div")`
  label: ProductDetailsPricesItem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-right: 3rem;
  border-right: 1px solid ${({ theme }) => theme.pallet.greyColor};
  @media (max-width: 620px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.pallet.greyColor2};
    padding: 0.5rem;
  }
`;

export const ProductDetailsFirstPrice = styled("span")`
  label: ProductDetailsFirstPrice;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.pallet.redColor};
`;

export const ProductDetailsPricesPieces = styled("span")`
  label: ProductDetailsPricesPieces;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.pallet.greyColor4};
`;

export const ProductDetailsPrice = styled("span")`
  label: ProductDetailsPrice;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const ProductDetailsContainer = styled("div")`
  label: ProductDetailsContainer;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductDetailsGroup = styled("div")`
  label: ProductDetailsGroup;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  padding: 1rem;
`;

export const ProductDetailsGroupContainer = styled("div")`
  label: ProductDetailsGroupContainer;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const ProductDetailsGroupTitle = styled("span")`
  label: ProductDetailsGroupTitle;
  width: 120px;
  color: ${({ theme }) => theme.pallet.blackColor};
  font-weight: 500;
`;

export const ProductDetailsGroupValue = styled("span")`
  label: ProductDetailsGroupValue;
  color: ${({ theme }) => theme.pallet.greyColor};
`;
