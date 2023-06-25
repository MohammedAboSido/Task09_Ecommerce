import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import MainButton from "./../MainButton/MainButton";
import {
  NinthFloorContainer,
  NinthFloorDetails,
  NinthFloorInput,
  NinthFloorInputWrapper,
  NinthFloorTitle,
  NinthFloorWrapper,
} from "./style";
function NinthFloor() {
  return (
    <NinthFloorWrapper>
      <NinthFloorTitle>Subscribe on our newsletter</NinthFloorTitle>
      <NinthFloorDetails>
        Get daily news on upcoming offers from many suppliers all over the world
      </NinthFloorDetails>
      <NinthFloorContainer>
        <NinthFloorInputWrapper>
          <EmailOutlinedIcon className="NinthFloorIcon" />
          <NinthFloorInput type="email" placeholder="Email" />
        </NinthFloorInputWrapper>
        <MainButton name="Subscribe" />
      </NinthFloorContainer>
    </NinthFloorWrapper>
  );
}

export default NinthFloor;
