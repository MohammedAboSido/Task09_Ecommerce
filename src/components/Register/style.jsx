import styled from "@emotion/styled";

export const RegisterWrapper = styled("div")`
  label: RegisterWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  width: 30%;
  ${({ theme }) =>
    ` padding:  ${theme.fontSizes.body}rem ${theme.fontSizes.h3}rem;border: 1px solid ${theme.pallet.blackColor2};`};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadows1};
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

export const RegisterTitle = styled("h3")`
  label: RegisterTitle;
  font-size: ${({ theme }) => theme.fontSizes.h3}rem;
  color: ${({ theme }) => theme.pallet.blackColor};
`;
export const RegisterName = styled("div")`
  label: RegisterName;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const PhoneContainer = styled("div")`
  label: PhoneContainer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const PhoneKeys = styled("select")`
  label: PhoneKeys;
  transition: all 0.3s ease-in-out;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  outline: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const PhoneKey = styled("option")`
  label: PhoneKey;
`;
export const InputContainer = styled("div")`
  label: InputContainer;
  width: 100%;
`;
export const CheckboxContainer = styled("div")`
  label: CheckboxContainer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const RegisterAccount = styled("div")`
  label: RegisterAccount;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.09rem;
  font-weight: 500;
`;
export const RegisterSpan = styled("span")`
  label: RegisterSpan;
  color: ${({ theme }) => theme.pallet.greyColor4};
`;
