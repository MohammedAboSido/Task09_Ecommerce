import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook-icon.png";
import google from "../../assets/images/google-icon.png";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { PATH } from "../../constants";
import { Checkbox } from "../../global/components";
import Input from "../Input/Input";
import Label from "../Label/Label";
import MainButton from "../MainButton/MainButton";
import Separatore from "../Separatore/Separatore";
import {
  CheckboxContainer,
  InputContainer,
  LoginAccount,
  LoginSpan,
  LoginTitle,
  LoginWrapper,
} from "./style";

function Login() {
  return (
    <LoginWrapper>
      <LoginTitle>Sign in</LoginTitle>
      <InputContainer>
        <Label label="Username" id="username" />
        <Input
          placeholder="Email or phone"
          id="username"
          name="username"
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <Label label="Password" id="password" />
        <Input
          placeholder="password"
          id="password"
          name="password"
          type="password"
        />
      </InputContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" id="remember" />
        <Label label="Remember me" id="remember" />
      </CheckboxContainer>
      <MainButton name="Login" />
      <Separatore title="or" />
      <SecondaryButton
        img={google}
        title="Continue with Google"
        brand="google"
      />
      <SecondaryButton
        img={facebook}
        title="Continue with Facebook"
        brand="facebook"
      />
      <LoginAccount>
        <LoginSpan>Don’t have an account?</LoginSpan>
        <Link to={PATH.REGISTER} className="link">
          Register now
        </Link>
      </LoginAccount>
    </LoginWrapper>
  );
}

export default Login;
