import styled from "@emotion/styled";

export const MainBtn = styled("button")`
  label: MainBtn;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  cursor: pointer;
  font-weight: 500;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.pallet.blueColor};
  color: ${({ theme }) => theme.pallet.whiteColor};
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  &:hover {
    background-color: ${({ theme }) => theme.pallet.blueColor3};
  }
`;
