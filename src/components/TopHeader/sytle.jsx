import styled from "@emotion/styled";

export const TopHeaderBody = styled("div")`
  label: TopHeaderBody;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
`;
export const TopHeaderWrapper = styled("div")`
  label: TopHeaderWrapper;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 1.5rem 0;
`;
export const TopHeaderLogo = styled("img")`
  label: TopHeaderLogo;
  cursor: pointer;
`;
