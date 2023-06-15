import React from "react";
import cart from "../../assets/images/cart.png";
import messages from "../../assets/images/message.png";
import orders from "../../assets/images/order.png";
import profile from "../../assets/images/profile.png";
import IconHeader from "../IconHeader/IconHeader";
import { IconsHeaderWrapper } from "./style";
function IconsHeader() {
  return (
    <IconsHeaderWrapper>
      <IconHeader img={profile} title="Profile" />
      <IconHeader img={messages} title="messages" />
      <IconHeader img={orders} title="orders" />
      <IconHeader img={cart} title="cart" />
    </IconsHeaderWrapper>
  );
}

export default IconsHeader;
