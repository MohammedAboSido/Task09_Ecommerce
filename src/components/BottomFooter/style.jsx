import styled from "@emotion/styled";

export const BottomFooterBody = styled("div")`
  label: BottomFooterBody;
  background-color: ${({ theme }) => theme.pallet.greyColor2A};
  padding: 1.5rem 0;
`;
export const BottomFooterWrapper = styled("div")`
  label: BottomFooterWrapper;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
export const BottomFooterCopyright = styled("span")`
  label: BottomFooterCopyright;
  color: ${({ theme }) => theme.pallet.blackColor};
`;
export const BottomFooterContainer = styled("div")`
  label: BottomFooterContainer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  & > svg {
    color: ${({ theme }) => theme.pallet.blackColor};
  }
`;
export const BottomFooterImg = styled("img")`
  label: BottomFooterImg;
`;
export const BottomFooterLanguage = styled("span")`
  label: BottomFooterLanguage;
  color: ${({ theme }) => theme.pallet.blackColor};
`;
