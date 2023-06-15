import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/images/cart.png";
import messages from "../../assets/images/message.png";
import orders from "../../assets/images/order.png";
import profile from "../../assets/images/profile.png";
import IconHeader from "../IconHeader/IconHeader";
import ThemeButton from "../ThemeButton/ThemeButton";
import { PATH } from "./../../constants/index";
import { IconsHeaderWrapper, Span } from "./style";
function IconsHeader() {
  return (
    <IconsHeaderWrapper>
      <IconHeader img={profile} title="Profile" />
      <IconHeader img={messages} title="messages" />
      <IconHeader img={orders} title="orders" />
      <IconHeader img={cart} title="cart" />
      <ThemeButton />
      <Link to={PATH.LOGIN} className="logout">
        <Span>Logout</Span>
        <LogoutIcon />
      </Link>
    </IconsHeaderWrapper>
  );
}

export default IconsHeader;
