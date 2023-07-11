import styled from "@emotion/styled";

export const DetailsWrapper = styled("div")`
  label: DetailsWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const DetailsDescription = styled("p")`
  label: DetailsDescription;
  color: ${({ theme }) => theme.pallet.greyColor6};
  font-size: 1rem;
  line-height: 1.5;
  width: 85%;
  @media (max-width: 1450px) {
    width: 100%;
  }
`;

export const DetailsItems = styled("div")`
  label: DetailsItems;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DetailsItem = styled("div")`
  label: DetailsItem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > svg {
    color: ${({ theme }) => theme.pallet.greyColor};
    font-size: 1.5rem;
  }
`;

export const DetailsTitle = styled("span")`
  label: DetailsTitle;
  color: ${({ theme }) => theme.pallet.greyColor6};
  font-size: 1rem;
`;
