import styled from "@emotion/styled";

export const TableWrapper = styled("table")`
  label: TableWrapper;
  width: 60%;
  @media (max-width: 1030px) {
    width: 100%;
  }
  @media (max-width: 340px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
