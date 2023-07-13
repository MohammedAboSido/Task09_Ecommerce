import styled from "@emotion/styled";

export const ShoppingGuideWrapper = styled("div")`
  label: ShoppingGuideWrapper;
  min-height: 100%;
  position: relative;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-bottom: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  overflow: hidden;
  width: 25.5%;
  &:hover > img {
    transform: rotate(14deg) scale(1.3);
  }
  @media (max-width: 1200px) {
    width: 100%;
    height: 200px;
    &:hover > img {
      transform: scale(1.1);
    }
  }
`;

export const ShoppingGuideImg = styled("img")`
  label: ShoppingGuideImg;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s linear;
`;
export const ShoppingGuideContainer = styled("div")`
  label: ShoppingGuideContainer;
  position: absolute;
  left: 0;
  top: 0;
  padding: 1.5rem 1rem;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const ShoppingGuideTitle = styled("span")`
  label: ShoppingGuideTitle;
  font-weight: 600;
  font-size: 1.3rem;
`;
export const ShoppingGuideBtn = styled("button")`
  label: ShoppingGuideBtn;
  width: fit-content;
  padding: 0.5rem 0.3rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  ${({ theme }) =>
    ` background-color: white ; color:${theme.pallet.blackColor3};`}
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  &:hover {
    ${({ theme }) =>
      ` background-color: ${theme.pallet.greyColor2}; color:${theme.pallet.blackColor3};`}
  }
`;
