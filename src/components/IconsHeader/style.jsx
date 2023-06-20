import styled from "@emotion/styled";

export const IconsHeaderWrapper = styled("div")`
  label: IconsHeaderWrapper;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 200px;
  gap: 1rem;
  flex-wrap: wrap;

  .logout {
    background-color: ${({ theme }) => theme.pallet.greyColor6};
    display: flex;
    align-items: center;
    flex: 1;
    max-width: fit-content;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.pallet.whiteColor};
  }
`;

export const Span = styled("span")`
  label: Span;
`;
