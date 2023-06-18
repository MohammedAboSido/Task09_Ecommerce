import styled from "@emotion/styled";

export const ProductLinkWrapper = styled("div")`
  label: ProductLinkWrapper;
  width: 100%;
  border-radius: 5px;
  flex: 1;

  .productLink {
    padding: 0.5rem;
    color: ${({ theme }) => theme.pallet.greyColor};
    border-radius: 5px;
    width: 100%;
    height: 100%;
    &:hover {
      color: ${({ theme }) => theme.pallet.blackColor};
      background-color: ${({ theme }) => theme.pallet.blueColor8};
      font-weight: 500;
    }
    display: flex;
    align-items: center;
  }
`;
