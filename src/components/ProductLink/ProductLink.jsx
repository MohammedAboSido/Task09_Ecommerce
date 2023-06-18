import React from "react";
import { Link } from "react-router-dom";
import { ProductLinkWrapper } from "./style";

function ProductLink({ title }) {
  return (
    <ProductLinkWrapper>
      <Link to="#" className="productLink">
        {title}
      </Link>
    </ProductLinkWrapper>
  );
}

export default ProductLink;
