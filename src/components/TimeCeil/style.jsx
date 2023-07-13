import styled from "@emotion/styled";

export const TimeCeilWrapper = styled("div")`
  label: TimeCeilWrapper;
  width: 2.9rem;
  height: 3.3rem;
  padding: 0.2rem;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallet.blackColor2};
`;
export const TimeCeilNumber = styled("span")`
  label: TimeCeilNumber;
  font-weight: bold;
  color: white;
`;
export const TimeCeilUnit = styled("span")`
  label: TimeCeilUnit;
  color: white;

  font-size: 0.8rem;
`;
