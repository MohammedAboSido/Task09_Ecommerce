import React from "react";
import ProductLink from "../ProductLink/ProductLink";
import { ProductsLinksWrapper } from "./style";

function ProductsLinks() {
  return (
    <ProductsLinksWrapper>
      <ProductLink title="Automobiles" />
      <ProductLink title="Clothes and wear" />
      <ProductLink title="Home interiors" />
      <ProductLink title="Computer and tech" />
      <ProductLink title="Tools, equipments" />
      <ProductLink title="Sports and outdoor" />
      <ProductLink title="Animal and pets" />
      <ProductLink title="Machinery tools" />
      <ProductLink title="More category" />
    </ProductsLinksWrapper>
  );
}

export default ProductsLinks;
