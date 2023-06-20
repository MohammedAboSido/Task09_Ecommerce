import React from "react";
import BottomHeader from "../../components/BottomHeader/BottomHeader";
import FirstFloor from "../../components/FirstFloor/FirstFloor";
import SecondFloor from "../../components/SecondFloor/SecondFloor";
import TopHeader from "../../components/TopHeader/TopHeader";
import { MainPageWrapper } from "./style";

function MainPage() {
  return (
    <MainPageWrapper>
      <TopHeader />
      <BottomHeader />
      <FirstFloor />
      <SecondFloor />
    </MainPageWrapper>
  );
}
export default MainPage;
