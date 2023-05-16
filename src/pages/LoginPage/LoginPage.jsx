import React from "react";
import Login from "../../components/Login/Login";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import { Container } from "../../global/components";
import { LoginPageWrapper } from "./style";

function LoginPage() {
  return (
    <>
      <LoginPageWrapper>
        <Container className="containerLogin">
          <Login />
        </Container>
        <SecondaryFooter />
      </LoginPageWrapper>
    </>
  );
}

export default LoginPage;
