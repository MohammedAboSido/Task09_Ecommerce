import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Supplier from "../../components/Supplier/Supplier";
import { ViewProductSectionOneWrapper } from "./style";
function ViewProductSectionOne() {
  return (
    <ViewProductSectionOneWrapper>
      <Gallery />
      <ProductDetails
        dot={<FiberManualRecordIcon />}
        star={<StarIcon />}
        rate="9.3"
        reviews="32 reviews"
        type="154 sold"
      />
      <Supplier />
    </ViewProductSectionOneWrapper>
  );
}

export default ViewProductSectionOne;
