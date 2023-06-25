import React from "react";
import BottomHeader from "../../components/BottomHeader/BottomHeader";
import EighthFloor from "../../components/EighthFloor/EighthFloor";
import FifthFloor from "../../components/FifthFloor/FifthFloor";
import FirstFloor from "../../components/FirstFloor/FirstFloor";
import FourthFloor from "../../components/FourthFloor/FourthFloor";
import SecondFloor from "../../components/SecondFloor/SecondFloor";
import SeventhFloor from "../../components/SeventhFloor/SeventhFloor";
import ThirdFloor from "../../components/ThirdFloor/ThirdFloor";
import TopHeader from "../../components/TopHeader/TopHeader";
import SixthFloor from "./../../components/SixthFloor/SixthFloor";
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
      <FifthFloor />
      <SixthFloor />
      <SeventhFloor />
      <EighthFloor />
    </MainPageWrapper>
  );
}
export default MainPage;
