import React from "react";
import { NavLink } from "react-router-dom";
import { LinksWrapper } from "./style";
function Links() {
  return (
    <LinksWrapper>
      <NavLink className="navLink" to="#">
        Description
      </NavLink>
      <NavLink className="navLink" to="#">
        Reviews
      </NavLink>
      <NavLink className="navLink" to="#">
        Shipping
      </NavLink>
      <NavLink className="navLink" to="#">
        About company
      </NavLink>
    </LinksWrapper>
  );
}

export default Links;
