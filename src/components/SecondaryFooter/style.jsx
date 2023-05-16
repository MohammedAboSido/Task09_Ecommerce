import styled from "@emotion/styled";

export const SecondaryFooterWrapper = styled("div")`
  label: SecondaryFooterWrapper;
  width: 100%;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  padding: 1.2rem;
`;
export const SecondaryFooterContainer = styled("div")`
  label: SecondaryFooterContainer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const SecondaryFooterLeft = styled("div")`
  label: SecondaryFooterLeft;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const SecondaryFooterRight = styled("div")`
  label: SecondaryFooterRight;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  cursor: pointer;
  & > .footerLink {
    font-size: ${({ theme }) => theme.fontSizes.body1}rem;
    color: ${({ theme }) => theme.pallet.greyColor};
  }
`;
export const SecondaryFooterImg = styled("img")`
  label: SecondaryFooterImg;
  cursor: pointer;
`;
