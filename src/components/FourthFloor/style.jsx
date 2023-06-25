import styled from "@emotion/styled";

export const FourthFloorWrapper = styled("div")`
  label: FourthFloorWrapper;
  display: flex;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 6px;
  margin: 1rem 0;
  border-right: none;
  border-bottom: none;
  overflow: hidden;
  height: 220px;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
  }
`;
export const FourthFloorContainer = styled("div")`
  label: FourthFloorContainer;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const FourthFloorContainerTop = styled("div")`
  label: FourthFloorContainerTop;
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
`;
export const FourthFloorContainerBottom = styled("div")`
  label: FourthFloorContainerBottom;
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
`;
