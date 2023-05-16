import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constants";
import { Checkbox } from "../../global/components";
import Input from "../Input/Input";
import Label from "../Label/Label";
import MainButton from "../MainButton/MainButton";
import Separatore from "../Separatore/Separatore";
import {
  CheckboxContainer,
  InputContainer,
  PhoneContainer,
  PhoneKey,
  PhoneKeys,
  RegisterAccount,
  RegisterName,
  RegisterSpan,
  RegisterTitle,
  RegisterWrapper,
} from "./style";

function Register() {
  return (
    <RegisterWrapper>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterName>
        <InputContainer>
          <Label label="Name" id="Name" />
          <Input placeholder="Type here" id="Name" name="Name" type="text" />
        </InputContainer>
        <InputContainer>
          <Label label="Surname" id="Surname" />
          <Input
            placeholder="Type here"
            id="Surname"
            name="Surname"
            type="text"
          />
        </InputContainer>
      </RegisterName>
      <InputContainer>
        <Label label="Your e-mail" id="email" />
        <Input
          placeholder="example@mail.com"
          id="email"
          name="email"
          type="email"
        />
      </InputContainer>
      <InputContainer>
        <Label label="Phone" id="phone" />
        <PhoneContainer>
          <PhoneKeys>
            <PhoneKey>UZ +998</PhoneKey>
            <PhoneKey>UZ +997</PhoneKey>
            <PhoneKey>UN +967</PhoneKey>
          </PhoneKeys>
          <Input
            placeholder="00-000-00-00"
            id="phone"
            name="Phone"
            type="tel"
          />
        </PhoneContainer>
      </InputContainer>
      <InputContainer>
        <Label label="Password" id="password" />
        <Input
          placeholder="At least 6 characters"
          id="password"
          name="password"
          type="password"
        />
      </InputContainer>
      <InputContainer>
        <Label label="Confirm Password" id="ConfirmPassword" />
        <Input
          placeholder="Type here"
          id="ConfirmPassword"
          name="ConfirmPassword"
          type="password"
        />
      </InputContainer>

      <MainButton name="Register Now" />
      <CheckboxContainer>
        <Checkbox type="checkbox" id="agree" />
        <Label label="I agree to the Terms and Conditions" id="agree" />
      </CheckboxContainer>
      <Separatore />

      <RegisterAccount>
        <RegisterSpan>Already have an account?</RegisterSpan>
        <Link to={PATH.LOGIN} className="link">
          Login
        </Link>
      </RegisterAccount>
    </RegisterWrapper>
  );
}

export default Register;
