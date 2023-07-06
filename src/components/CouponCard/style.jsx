import styled from "@emotion/styled";

export const CouponCardWrapper = styled("div")`
  label: CouponCardWrapper;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const CouponCardTitle = styled("span")`
  label: CouponCardTitle;
  color: ${({ theme }) => theme.pallet.greyColor6};
`;

export const CouponCardContainer = styled("div")`
  label: CouponCardContainer;
  display: flex;
  align-items: center;
`;

export const CouponCardInput = styled("input")`
  label: CouponCardInput;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  outline: none;
  border-radius: 5px;
  font-size: 0.9rem;
  padding-right: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const CouponCardButton = styled("button")`
  label: CouponCardButton;
  padding: ${({ theme }) => theme.fontSizes.body}rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  color: ${({ theme }) => theme.pallet.blueColor};
  &:hover {
    background-color: ${({ theme }) => theme.pallet.greyColor7};
  }
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
