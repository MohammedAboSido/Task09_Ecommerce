import styled from "@emotion/styled";

export const IconsHeaderWrapper = styled("div")`
  label: IconsHeaderWrapper;
  display: flex;
  align-items: center;
  gap: 1rem;

  .logout {
    background-color: ${({ theme }) => theme.pallet.greyColor6};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.pallet.whiteColor};
  }
`;

export const Span = styled("span")`
  label: Span;
`;
