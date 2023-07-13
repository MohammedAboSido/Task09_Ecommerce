import styled from "@emotion/styled";

export const RegisterPageWrapper = styled("div")`
  label: RegisterPageWrapper;
  background-color: #ecf9ff;
  background-color: ${({ theme }) => theme.pallet.greyColor3};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  & > .containerRegister {
    display: flex;
    justify-content: center;
    padding: 3rem 0;
  }
`;
