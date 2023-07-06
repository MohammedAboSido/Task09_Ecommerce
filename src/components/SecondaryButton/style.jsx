import styled from "@emotion/styled";

export const SecondaryButtonWrapper = styled("button")`
  label: SecondaryButtonWrapper;

  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  ${({ theme, brand }) =>
    brand === "google"
      ? ` background-color: ${theme.pallet.whiteColor}; color:${theme.pallet.blackColor3};`
      : `background-color:  ${theme.pallet.blueColor6};color:${theme.pallet.whiteColor};`}
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  &:hover {
    ${({ theme, brand }) =>
      brand === "google"
        ? ` background-color: ${theme.pallet.greyColor2}; color:${theme.pallet.blackColor3};`
        : `background-color:  ${theme.pallet.blueColor};color:${theme.pallet.whiteColor};`}
  }
  padding-left: 2rem;
`;
export const SecondaryButtonImg = styled("img")`
  label: SecondaryButtonImg;
  position: absolute;
  left: 6%;
  top: 50%;
  transform: translateY(-50%);
`;
