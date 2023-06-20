import styled from "@emotion/styled";

export const OffersWrapper = styled("div")`
  label: OffersWrapper;
  padding: 1.3rem;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  @media (max-width: 1200px) {
    min-width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;
export const OffersTitle = styled("h3")`
  label: OffersTitle;
  font-size: 1.2rem;
  font-weight: 600;
`;
export const OffersDetails = styled("span")`
  label: OffersDetails;
  color: ${({ theme }) => theme.pallet.greyColor};
  font-size: 0.97rem;
`;

export const OffersTimeCeils = styled("div")`
  label: OffersTimeCeils;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 1rem 0;
  @media (max-width: 1200px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
