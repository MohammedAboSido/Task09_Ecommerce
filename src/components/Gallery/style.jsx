import styled from "@emotion/styled";

export const GalleryWrapper = styled("div")`
  label: GalleryWrapper;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  flex: 1 30%;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;
export const GalleryTop = styled("div")`
  label: GalleryTop;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  padding: 2rem;
`;
export const GalleryTopImg = styled("img")`
  label: GalleryTopImg;
  object-fit: contain;
  @media (max-width: 620px) {
    width: 100%;
  }
`;
export const GalleryBottom = styled("div")`
  label: GalleryBottom;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: 1020px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export const GalleryBottomImg = styled("img")`
  label: GalleryBottomImg;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;
