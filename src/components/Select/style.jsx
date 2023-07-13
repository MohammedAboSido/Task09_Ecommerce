import styled from "@emotion/styled";

export const SelectWrapper = styled("div")`
  label: SelectWrapper;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const SelectInput = styled("input")`
  label: SelectInput;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const SelectTitle = styled("label")`
  label: SelectTitle;
  cursor: pointer;
  color: ${({ theme }) => theme.pallet.greyColor};
`;
