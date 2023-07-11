import styled from "@emotion/styled";

export const LinksWrapper = styled("div")`
  label: LinksWrapper;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  .navLink {
    padding: 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.pallet.greyColor};
    @media (max-width: 950px) {
      flex: 1 fit-content;
    }
  }
  @media (max-width: 950px) {
    justify-content: center;
  }
`;
