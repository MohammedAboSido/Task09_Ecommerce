import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import SupplierCard from "../SupplierCard/SupplierCard";
import { SupplierContainer, SupplierTitle, SupplierWrapper } from "./style";
function Supplier() {
  return (
    <SupplierWrapper>
      <SupplierCard />
      <SupplierContainer>
        <FavoriteBorderIcon />
        <SupplierTitle>Save for later</SupplierTitle>
      </SupplierContainer>
    </SupplierWrapper>
  );
}

export default Supplier;
