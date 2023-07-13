import styled from "@emotion/styled";

export const OfferProductCardWrapper = styled("div")`
  label: OfferProductCardWrapper;
  padding: 1rem 0;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  &:hover > img {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
    min-height: 15rem;
    min-width: 10rem;
  }
`;
export const OfferProductCardImg = styled("img")`
  label: OfferProductCardImg;
  object-fit: contain;
  width: 115px;
  height: 115px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 270px) {
    width: 80px;
    height: 80px;
  }
`;
export const OfferProductCardTitle = styled("span")`
  label: OfferProductCardTitle;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;
export const OfferProductCardDiscount = styled("span")`
  label: OfferProductCardDiscount;
  padding: 0.2rem 0.8rem;
  border-radius: 3rem;
  color: ${({ theme }) => theme.pallet.redColor};
  background-color: ${({ theme }) => theme.pallet.redColor2};
  font-weight: 500;
`;
