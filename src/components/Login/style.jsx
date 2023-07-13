import styled from "@emotion/styled";
export const LoginWrapper = styled("div")`
  label: LoginWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  width: 30%;
  ${({ theme }) =>
    ` padding:  ${theme.fontSizes.body}rem ${theme.fontSizes.h3}rem;border: 1px solid ${theme.pallet.blackColor2};`};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadows1};
  & > button:nth-of-type(2) {
    background-color: white;
  }
  & > button:nth-of-type(3) {
    color: white;
  }
  @media (max-width: 1270px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const LoginTitle = styled("h3")`
  label: LoginTitle;
  font-size: ${({ theme }) => theme.fontSizes.h3}rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;
export const InputContainer = styled("div")`
  label: InputContainer;
`;
export const CheckboxContainer = styled("div")`
  label: CheckboxContainer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const LoginAccount = styled("div")`
  label: LoginAccount;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.09rem;
  font-weight: 500;
`;
export const LoginSpan = styled("span")`
  label: LoginSpan;
  color: ${({ theme }) => theme.pallet.greyColor4};
`;
