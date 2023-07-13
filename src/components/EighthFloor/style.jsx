import styled from "@emotion/styled";

export const EighthFloorWrapper = styled("div")`
  label: EighthFloorWrapper;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const EighthFloorTitle = styled("h3")`
  label: EighthFloorTitle;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;

export const EighthFloorRegions = styled("div")`
  label: EighthFloorRegions;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
