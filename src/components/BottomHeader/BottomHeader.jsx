import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import flag from "../../assets/images/flag.png";
import { Container } from "../../global/components";
import {
  BottomHeaderBody,
  BottomHeaderLeft,
  BottomHeaderLeftLinks,
  BottomHeaderRight,
  BottomHeaderSpan,
  BottomHeaderWrapper,
  CountryFlags,
  FlagImg,
  Option,
  Selector,
} from "./style";
function BottomHeader() {
  return (
    <BottomHeaderBody>
      <Container>
        <BottomHeaderWrapper>
          <BottomHeaderLeft>
            <MenuIcon />
            <BottomHeaderLeftLinks>
              <BottomHeaderSpan>All category</BottomHeaderSpan>
              <BottomHeaderSpan>Hot offers</BottomHeaderSpan>
              <BottomHeaderSpan>Gift boxes</BottomHeaderSpan>
              <BottomHeaderSpan>Projects</BottomHeaderSpan>
              <BottomHeaderSpan>Menu item</BottomHeaderSpan>
              <Selector>
                <Option>Help</Option>
                <Option>UZ +997</Option>
                <Option>UN +967</Option>
              </Selector>
            </BottomHeaderLeftLinks>
          </BottomHeaderLeft>
          <BottomHeaderRight>
            <Selector>
              <Option>English,USD</Option>
              <Option>UZ +997</Option>
              <Option>UN +967</Option>
            </Selector>
            <CountryFlags>
              <BottomHeaderSpan>Ship to </BottomHeaderSpan>
              <FlagImg src={flag} />
              <KeyboardArrowDownIcon />
            </CountryFlags>
          </BottomHeaderRight>
        </BottomHeaderWrapper>
      </Container>
    </BottomHeaderBody>
  );
}

export default BottomHeader;
