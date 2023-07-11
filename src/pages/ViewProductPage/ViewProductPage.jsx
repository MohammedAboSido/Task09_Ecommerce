import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import BottomFooter from "../../components/BottomFooter/BottomFooter";
import BottomHeader from "../../components/BottomHeader/BottomHeader";
import Discount from "../../components/Discount/Discount";
import SavedCards from "../../components/SavedCards/SavedCards";
import TopFooter from "../../components/TopFooter/TopFooter";
import TopHeader from "../../components/TopHeader/TopHeader";
import ViewProductSectionOne from "../../components/ViewProductSectionOne/ViewProductSectionOne";
import ViewProductSectionTwo from "../../components/ViewProductSectionTwo/ViewProductSectionTwo";
import { Container } from "../../global/components";
import {
  ViewProductPageWrapper,
  ViewProductRoute,
  ViewProductRoutes,
} from "./style";
function ViewProductPage() {
  return (
    <ViewProductPageWrapper>
      <TopHeader />
      <BottomHeader />
      <Container>
        <ViewProductRoutes>
          <ViewProductRoute>
            Home <KeyboardArrowRightIcon />
          </ViewProductRoute>
          <ViewProductRoute>
            Clothings <KeyboardArrowRightIcon />
          </ViewProductRoute>
          <ViewProductRoute>
            Men’s wear <KeyboardArrowRightIcon />
          </ViewProductRoute>
          <ViewProductRoute>Summer clothing </ViewProductRoute>
        </ViewProductRoutes>
        <ViewProductSectionOne />
        <ViewProductSectionTwo />
        <SavedCards isRelated={true} />
        <Discount />
      </Container>
      <TopFooter />
      <BottomFooter />
    </ViewProductPageWrapper>
  );
}
export default ViewProductPage;
