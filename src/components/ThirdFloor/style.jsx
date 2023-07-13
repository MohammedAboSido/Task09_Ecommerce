import styled from "@emotion/styled";

export const ThirdFloorWrapper = styled("div")`
  label: ThirdFloorWrapper;
  display: flex;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
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
export const ThirdFloorContainer = styled("div")`
  label: ThirdFloorContainer;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const ThirdFloorContainerTop = styled("div")`
  label: ThirdFloorContainerTop;
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
`;
export const ThirdFloorContainerBottom = styled("div")`
  label: ThirdFloorContainerBottom;
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
`;
