import styled from "@emotion/styled";

export const ThemeButtonWrapper = styled("div")`
  label: ThemeButtonWrapper;
  cursor: pointer;
  background-color: ${({ theme }) => theme.pallet.greyColor};
  border-radius: 50%;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
