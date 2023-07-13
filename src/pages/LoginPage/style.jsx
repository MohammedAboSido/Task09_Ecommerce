import styled from "@emotion/styled";

export const LoginPageWrapper = styled("div")`
  label: LoginPageWrapper;
  background-color: ${({ theme }) => theme.pallet.greyColor3};
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  & > .containerLogin {
    display: flex;
    justify-content: center;
  }
`;
