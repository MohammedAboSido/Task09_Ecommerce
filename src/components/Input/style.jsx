import styled from "@emotion/styled";

export const InputWrapper = styled("div")`
  label: InputWrapper;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputLabel = styled("label")`
  label: InputLabel;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
`;
export const InputFelid = styled("input")`
  label: InputFelid;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  outline: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
`;
