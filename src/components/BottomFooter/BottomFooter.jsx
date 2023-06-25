import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React from "react";
import usFlag from "../../assets/images/us-flag.png";
import { Container } from "../../global/components";
import {
  BottomFooterBody,
  BottomFooterContainer,
  BottomFooterCopyright,
  BottomFooterImg,
  BottomFooterLanguage,
  BottomFooterWrapper,
} from "./style";
function BottomFooter() {
  return (
    <BottomFooterBody>
      <Container>
        <BottomFooterWrapper>
          <BottomFooterCopyright>&copy; 2023 Ecommerce.</BottomFooterCopyright>
          <BottomFooterContainer>
            <BottomFooterImg src={usFlag} />
            <BottomFooterLanguage>English</BottomFooterLanguage>
            <KeyboardArrowUpOutlinedIcon />
          </BottomFooterContainer>
        </BottomFooterWrapper>
      </Container>
    </BottomFooterBody>
  );
}

export default BottomFooter;
