import styled from "@emotion/styled";

export const SeparatoreWrapper = styled("div")`
  label: SeparatoreWrapper;
  width: 100%;
  height: 2px;
  position: relative;
  background-color: ${({ theme }) => theme.pallet.greyColor};
  border-radius: 5px;
`;
export const SeparatoreTitle = styled("span")`
  label: SeparatoreTitle;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  padding: 2px;
  border-radius: 5px;
  color: ${({ theme }) => theme.pallet.greyColor};
  font-size: 1.3rem;
  text-transform: uppercase;
`;
