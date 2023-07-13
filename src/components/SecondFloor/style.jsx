import styled from "@emotion/styled";

export const SecondFloorWrapper = styled("div")`
  label: SecondFloorWrapper;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 6px;
  height: 14rem;
  margin-top: 2rem;
  overflow: hidden;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  &:last-child {
    border-right: none;
  }
  @media (max-width: 1200px) {
    height: fit-content;
  }
`;
