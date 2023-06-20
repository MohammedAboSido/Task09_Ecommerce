import styled from "@emotion/styled";

export const TopHeaderBody = styled("div")`
  label: TopHeaderBody;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
`;
export const TopHeaderWrapper = styled("div")`
  label: TopHeaderWrapper;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem 0;
  flex-wrap: wrap;
  @media (max-width: 1115px) {
    gap: 2rem;
  }
`;
export const TopHeaderLogo = styled("img")`
  label: TopHeaderLogo;
  cursor: pointer;
`;
