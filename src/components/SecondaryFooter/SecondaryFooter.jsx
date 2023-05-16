import React from "react";
import { Link } from "react-router-dom";
import amercan from "../../assets/images/amercan.png";
import express from "../../assets/images/express.png";
import visa from "../../assets/images/payment.png";
import paypal from "../../assets/images/visa.png";
import { PATH } from "../../constants";
import { Container } from "../../global/components";
import {
  SecondaryFooterContainer,
  SecondaryFooterImg,
  SecondaryFooterLeft,
  SecondaryFooterRight,
  SecondaryFooterWrapper,
} from "./style";

function SecondaryFooter() {
  return (
    <SecondaryFooterWrapper>
      <Container>
        <SecondaryFooterContainer>
          <SecondaryFooterLeft>
            <SecondaryFooterImg src={amercan} />
            <SecondaryFooterImg src={express} />
            <SecondaryFooterImg src={paypal} />
            <SecondaryFooterImg src={visa} />
          </SecondaryFooterLeft>
          <SecondaryFooterRight>
            <Link to={PATH.LOGIN} className="footerLink">
              Support
            </Link>
            <Link to={PATH.LOGIN} className="footerLink">
              Privacy&Cookies
            </Link>
            <Link to={PATH.LOGIN} className="footerLink">
              Accessibility
            </Link>
          </SecondaryFooterRight>
        </SecondaryFooterContainer>
      </Container>
    </SecondaryFooterWrapper>
  );
}

export default SecondaryFooter;
