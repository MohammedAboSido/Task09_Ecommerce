import styled from "@emotion/styled";

export const CheckoutCardWrapper = styled("div")`
  label: CheckoutCardWrapper;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const CheckoutCardContainer = styled("div")`
  label: CheckoutCardContainer;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const CheckoutCardPayment = styled("div")`
  label: CheckoutCardPayment;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckoutCardTitle = styled("span")`
  label: CheckoutCardTitle;
  color: ${({ theme }) => theme.pallet.greyColor4};
`;

export const CheckoutCardSubtotal = styled("span")`
  label: CheckoutCardSubtotal;
  color: ${({ theme }) => theme.pallet.greyColor6};
  font-weight: 500;
`;

export const CheckoutCardDiscount = styled("span")`
  label: CheckoutCardDiscount;
  color: ${({ theme }) => theme.pallet.redColor};
  font-weight: 500;
`;

export const CheckoutCardTax = styled("span")`
  label: CheckoutCardTax;
  color: ${({ theme }) => theme.pallet.greenColor};
  font-weight: 500;
`;

export const CheckoutCardTotal = styled("span")`
  label: CheckoutCardTotal;
  color: ${({ theme }) => theme.pallet.blackColor};
  font-weight: 600;
`;

export const CheckoutCardTotalPrice = styled("span")`
  label: CheckoutCardTotalPrice;
  color: ${({ theme }) => theme.pallet.blackColor};
  font-weight: 600;
  font-size: 1.3rem;
`;

export const CheckoutCardButton = styled("button")`
  label: CheckoutCardButton;
  width: 100%;
  padding: 0.9rem ${({ theme }) => theme.fontSizes.body}rem;
  cursor: pointer;
  font-weight: 500;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.pallet.greenColor};
  color: ${({ theme }) => theme.pallet.whiteColor};
  font-size: 1.2rem;
  &:hover {
    background-color: ${({ theme }) => theme.pallet.greenColor2};
  }
  @media (max-width: 350px) {
    padding: 0.5rem;
  }
`;

export const CheckoutCardPaymentMethod = styled("div")`
  label: CheckoutCardPaymentMethod;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  align-self: center;
  @media (max-width: 350px) {
    gap: 0.5rem;
  }
`;

export const CheckoutCardPaymentMethodImg = styled("img")`
  label: CheckoutCardPaymentMethodImg;
  cursor: pointer;
`;
