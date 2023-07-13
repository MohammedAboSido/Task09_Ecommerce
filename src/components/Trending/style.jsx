import styled from "@emotion/styled";

export const TrendingWrapper = styled("div")`
  label: TrendingWrapper;
  position: relative;
  flex: 1;
  @media (max-width: 1285px) {
    flex: 1 62%;
  }
  @media (max-width: 683px) {
    order: -1;
    flex: 1 100%;
    overflow: hidden;
  }
`;
export const TrendingImg = styled("img")`
  label: TrendingImg;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
export const TrendingContainer = styled("div")`
  label: TrendingContainer;
  position: absolute;
  left: 2rem;
  top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  @media (max-width: 512px) {
    left: 1rem;
    top: 1rem;
  }
`;
export const TrendingSpan = styled("span")`
  label: TrendingSpan;
  font-size: 2rem;
  color: ${({ theme }) => theme.pallet.blackColor};
  @media (max-width: 512px) {
    font-size: 1rem;
  }
`;
export const TrendingTitle = styled("h3")`
  label: TrendingTitle;
  font-size: 2rem;
  color: ${({ theme }) => theme.pallet.blackColor};
  @media (max-width: 512px) {
    font-size: 1rem;
  }
`;
export const TrendingButton = styled("button")`
  label: TrendingButton;
  width: fit-content;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  ${({ theme }) => ` background-color: white; color:black;`}
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  &:hover {
    ${({ theme }) =>
      ` background-color: ${theme.pallet.greyColor2}; color:${theme.pallet.blackColor3};`}
  }
  margin-top: 1.3rem;
`;
