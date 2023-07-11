import styled from "@emotion/styled";

export const SupplierWrapper = styled("div")`
  label: SupplierWrapper;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1 250px;
`;

export const SupplierContainer = styled("div")`
  label: SupplierContainer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  & > svg {
    color: ${({ theme }) => theme.pallet.blueColor};
  }
`;

export const SupplierTitle = styled("div")`
  label: SupplierTitle;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.pallet.greyColor6};
`;
