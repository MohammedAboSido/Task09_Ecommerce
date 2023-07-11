import styled from "@emotion/styled";

export const SupplierCardWrapper = styled("div")`
  label: SupplierCardWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  padding: 1rem;
`;

export const SupplierCardHeading = styled("div")`
  label: SupplierCardHeading;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  padding-bottom: 1.2rem;
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SupplierCardImg = styled("img")`
  label: SupplierCardImg;
`;

export const SupplierCardHeadingRight = styled("div")`
  label: SupplierCardHeadingRight;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media (max-width: 320px) {
    align-self: flex-start;
    text-align: center;
  }
`;

export const SupplierCardTitle = styled("span")`
  label: SupplierCardTitle;
  color: ${({ theme }) => theme.pallet.greyColor6};
  font-size: 1rem;
`;

export const SupplierCardDetails = styled("div")`
  label: SupplierCardDetails;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding-bottom: 1.2rem;
`;

export const SupplierCardItem = styled("div")`
  label: SupplierCardItem;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > svg {
    color: ${({ theme }) => theme.pallet.greyColor};
    font-size: 1.3rem;
  }
`;

export const SupplierCardItemImg = styled("img")`
  label: SupplierCardItemImg;
`;

export const SupplierCardItemTitle = styled("span")`
  label: SupplierCardItemTitle;
  color: ${({ theme }) => theme.pallet.greyColor};
`;

export const SupplierCardBtn = styled("div")`
  label: SupplierCardBtn;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > button {
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
    font-weight: 500;
  }
  & > :last-child {
    color: ${({ theme }) => theme.pallet.blueColor};
    @media (max-width: 320px) {
      padding-left: 0.5rem;
    }
  }
`;
