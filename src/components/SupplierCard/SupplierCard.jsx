import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import React from "react";
import flag from "../../assets/images/flag.png";
import supplierImg from "../../assets/images/supplier.png";
import MainButton from "./../MainButton/MainButton";
import SecondaryButton from "./../SecondaryButton/SecondaryButton";
import {
  SupplierCardBtn,
  SupplierCardDetails,
  SupplierCardHeading,
  SupplierCardHeadingRight,
  SupplierCardImg,
  SupplierCardItem,
  SupplierCardItemImg,
  SupplierCardItemTitle,
  SupplierCardTitle,
  SupplierCardWrapper,
} from "./style";
function SupplierCard() {
  return (
    <SupplierCardWrapper>
      <SupplierCardHeading>
        <SupplierCardImg src={supplierImg} />
        <SupplierCardHeadingRight>
          <SupplierCardTitle>Supplier</SupplierCardTitle>
          <SupplierCardTitle>Guanjoi Trading LLC</SupplierCardTitle>
        </SupplierCardHeadingRight>
      </SupplierCardHeading>
      <SupplierCardDetails>
        <SupplierCardItem>
          <SupplierCardItemImg src={flag} />
          <SupplierCardItemTitle>Germany, Berlin</SupplierCardItemTitle>
        </SupplierCardItem>

        <SupplierCardItem>
          <VerifiedUserOutlinedIcon />
          <SupplierCardItemTitle>Verified Seller</SupplierCardItemTitle>
        </SupplierCardItem>

        <SupplierCardItem>
          <LanguageOutlinedIcon />
          <SupplierCardItemTitle>Worldwide shipping</SupplierCardItemTitle>
        </SupplierCardItem>
      </SupplierCardDetails>
      <SupplierCardBtn>
        <MainButton name="Send inquiry" />
        <SecondaryButton title="Seller's profile" brand="google" />
      </SupplierCardBtn>
    </SupplierCardWrapper>
  );
}
export default SupplierCard;
