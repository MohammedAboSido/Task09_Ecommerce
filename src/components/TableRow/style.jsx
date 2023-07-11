import styled from "@emotion/styled";

export const TableRowWrapper = styled("tr")`
  label: TableRowWrapper;
  @media (max-width: 340px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TableRowDataProperty = styled("td")`
  label: TableRowDataProperty;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.pallet.greyColor2};
  color: ${({ theme }) => theme.pallet.greyColor6};
  width: 30%;
  @media (max-width: 340px) {
    width: 100%;
  }
`;

export const TableRowDataValue = styled("td")`
  label: TableRowDataValue;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor};
  padding: 0.5rem;
  color: ${({ theme }) => theme.pallet.greyColor4};
  width: 100%;
`;
