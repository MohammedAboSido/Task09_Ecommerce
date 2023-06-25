import styled from "@emotion/styled";

export const TopFooterBody = styled("div")`
  label: TopFooterBody;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  padding: 2.5rem 0 4rem 0;
`;
export const TopFooterWrapper = styled("div")`
  label: TopFooterWrapper;
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const TopFooterLeft = styled("div")`
  label: TopFooterLeft;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 2;
`;
export const TopFooterLeftLogo = styled("img")`
  label: TopFooterLeftLogo;
  cursor: pointer;
`;
export const TopFooterLeftDescription = styled("p")`
  label: TopFooterLeftDescription;
  color: ${({ theme }) => theme.pallet.greyColor6};
  font-weight: 400;
`;
export const TopFooterLeftSocials = styled("div")`
  label: TopFooterLeftSocials;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const TopFooterLeftImg = styled("img")`
  label: TopFooterLeftImg;
  cursor: pointer;
`;
export const TopFooterCenter = styled("div")`
  label: TopFooterCenter;
  flex: 4;
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    min-width: 200px;
  }
`;
export const TopFooterCenterContainer = styled("div")`
  label: TopFooterCenterContainer;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  @media (max-width: 600px) {
    width: 150px;
  }
`;
export const TopFooterTitle = styled("h3")`
  label: TopFooterTitle;
  font-weight: 600;
  font-size: 1rem;
`;
export const TopFooterCenterItem = styled("span")`
  label: TopFooterCenterItem;
  color: ${({ theme }) => theme.pallet.greyColor};
  cursor: pointer;
`;
export const TopFooterRight = styled("div")`
  label: TopFooterRight;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
export const TopFooterRightImg = styled("img")`
  label: TopFooterRightImg;
  background-color: black;
  padding: 0.4rem;
  border-radius: 5px;
  object-fit: contain;
  cursor: pointer;
  width: 140px;
  height: 40px;
`;
