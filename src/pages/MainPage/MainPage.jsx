import React from "react";
import BottomHeader from "../../components/BottomHeader/BottomHeader";
import FirstFloor from "../../components/FirstFloor/FirstFloor";
import FourthFloor from "../../components/FourthFloor/FourthFloor";
import SecondFloor from "../../components/SecondFloor/SecondFloor";
import ThirdFloor from "../../components/ThirdFloor/ThirdFloor";
import TopHeader from "../../components/TopHeader/TopHeader";
import { MainPageWrapper } from "./style";

function MainPage() {
  return (
    <MainPageWrapper>
      <TopHeader />
      <BottomHeader />
      <FirstFloor />
      <SecondFloor />
      <ThirdFloor />
      <FourthFloor />
    </MainPageWrapper>
  );
}
export default MainPage;
