import React from "react";
import Register from "../../components/Register/Register";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import { Container } from "../../global/components";
import { RegisterPageWrapper } from "./style";
function RegisterPage() {
  return (
    <>
      <RegisterPageWrapper>
        <Container className="containerRegister">
          <Register />
        </Container>
        <SecondaryFooter />
      </RegisterPageWrapper>
    </>
  );
}

export default RegisterPage;
