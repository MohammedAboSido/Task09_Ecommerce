import styled from "@emotion/styled";

export const InputWrapper = styled("div")`
  label: InputWrapper;
  width: 100%;
  position: relative;
  & > :nth-child(2) {
    color: ${({ theme }) => theme.pallet.blackColor3};
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${({ theme }) => theme.fontSizes.passIcon}rem;
    cursor: pointer;
  }
`;

export const InputFelid = styled("input")`
  label: InputFelid;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  outline: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  padding-right: 2rem;
`;
