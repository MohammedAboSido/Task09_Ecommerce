import React from "react";
import appleStore from "../../assets/images/apple-store.png";
import facebook from "../../assets/images/facebook.png";
import googleStore from "../../assets/images/google-store.png";
import instegram from "../../assets/images/instegram.png";
import linkedin from "../../assets/images/linkedin.png";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import { Container } from "../../global/components";
import {
  TopFooterBody,
  TopFooterCenter,
  TopFooterCenterContainer,
  TopFooterCenterItem,
  TopFooterLeft,
  TopFooterLeftDescription,
  TopFooterLeftImg,
  TopFooterLeftLogo,
  TopFooterLeftSocials,
  TopFooterRight,
  TopFooterRightImg,
  TopFooterTitle,
  TopFooterWrapper,
} from "./style";
function TopFooter() {
  return (
    <TopFooterBody>
      <Container>
        <TopFooterWrapper>
          <TopFooterLeft>
            <TopFooterLeftLogo src={logo} />
            <TopFooterLeftDescription>
              Best information about the company gies here but now lorem ipsum
              is
            </TopFooterLeftDescription>
            <TopFooterLeftSocials>
              <TopFooterLeftImg src={facebook} />
              <TopFooterLeftImg src={twitter} />
              <TopFooterLeftImg src={linkedin} />
              <TopFooterLeftImg src={instegram} />
              <TopFooterLeftImg src={youtube} />
            </TopFooterLeftSocials>
          </TopFooterLeft>

          <TopFooterCenter>
            <TopFooterCenterContainer>
              <TopFooterTitle>About</TopFooterTitle>
              <TopFooterCenterItem>About Us</TopFooterCenterItem>
              <TopFooterCenterItem>Find store</TopFooterCenterItem>
              <TopFooterCenterItem>Categories</TopFooterCenterItem>
              <TopFooterCenterItem>Blogs</TopFooterCenterItem>
            </TopFooterCenterContainer>
            <TopFooterCenterContainer>
              <TopFooterTitle>Partnership</TopFooterTitle>
              <TopFooterCenterItem>About Us</TopFooterCenterItem>
              <TopFooterCenterItem>Find store</TopFooterCenterItem>
              <TopFooterCenterItem>Categories</TopFooterCenterItem>
              <TopFooterCenterItem>Blogs</TopFooterCenterItem>
            </TopFooterCenterContainer>
            <TopFooterCenterContainer>
              <TopFooterTitle>Information</TopFooterTitle>
              <TopFooterCenterItem>Help Center</TopFooterCenterItem>
              <TopFooterCenterItem>Money Refund</TopFooterCenterItem>
              <TopFooterCenterItem>Shipping</TopFooterCenterItem>
              <TopFooterCenterItem>Contact us</TopFooterCenterItem>
            </TopFooterCenterContainer>
            <TopFooterCenterContainer>
              <TopFooterTitle>For users</TopFooterTitle>
              <TopFooterCenterItem>Login</TopFooterCenterItem>
              <TopFooterCenterItem>Register</TopFooterCenterItem>
              <TopFooterCenterItem>Settings</TopFooterCenterItem>
              <TopFooterCenterItem>My Orders</TopFooterCenterItem>
            </TopFooterCenterContainer>
          </TopFooterCenter>
          <TopFooterRight>
            <TopFooterTitle>Get app</TopFooterTitle>
            <TopFooterRightImg src={appleStore} />
            <TopFooterRightImg src={googleStore} />
          </TopFooterRight>
        </TopFooterWrapper>
      </Container>
    </TopFooterBody>
  );
}

export default TopFooter;
