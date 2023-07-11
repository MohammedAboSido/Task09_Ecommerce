import CheckIcon from "@mui/icons-material/Check";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import React from "react";
import { StoreCardScore } from "../StoreCard/style";
import {
  ProductDetailsContainer,
  ProductDetailsFirstPrice,
  ProductDetailsGroup,
  ProductDetailsGroupContainer,
  ProductDetailsGroupTitle,
  ProductDetailsGroupValue,
  ProductDetailsPrice,
  ProductDetailsPrices,
  ProductDetailsPricesItem,
  ProductDetailsPricesPieces,
  ProductDetailsStatus,
  ProductDetailsStatusName,
  ProductDetailsTitle,
  ProductDetailsWrapper,
  StoreCardContainer,
  StoreCardOrder,
  StoreCardRate,
  StoreCardShipping,
  StoreCardStars,
} from "./style";
function ProductDetails({ star, dot, rate, reviews, type }) {
  return (
    <ProductDetailsWrapper>
      <ProductDetailsStatus>
        <CheckIcon />
        <ProductDetailsStatusName>In stock</ProductDetailsStatusName>
      </ProductDetailsStatus>
      <ProductDetailsTitle>
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </ProductDetailsTitle>
      <StoreCardRate>
        <StoreCardContainer>
          <StoreCardStars>
            {star}
            {star}
            {star}
            {star}
            {star}
          </StoreCardStars>
          <StoreCardScore>{rate}</StoreCardScore>
        </StoreCardContainer>
        <StoreCardContainer>
          {dot}
          <MessageOutlinedIcon className="messageOutlinedIcon" />
          <StoreCardOrder>{reviews}</StoreCardOrder>
        </StoreCardContainer>
        <StoreCardContainer>
          {dot}
          <ShoppingBasketOutlinedIcon className="shoppingBasketOutlinedIcon" />
          <StoreCardShipping>{type}</StoreCardShipping>
        </StoreCardContainer>
      </StoreCardRate>

      <ProductDetailsPrices>
        <ProductDetailsPricesItem>
          <ProductDetailsFirstPrice>$98.00</ProductDetailsFirstPrice>
          <ProductDetailsPricesPieces>50-100 pcs</ProductDetailsPricesPieces>
        </ProductDetailsPricesItem>

        <ProductDetailsPricesItem>
          <ProductDetailsPrice>$90.00</ProductDetailsPrice>
          <ProductDetailsPricesPieces>100-700 pcs</ProductDetailsPricesPieces>
        </ProductDetailsPricesItem>

        <ProductDetailsPricesItem>
          <ProductDetailsPrice>$78.00</ProductDetailsPrice>
          <ProductDetailsPricesPieces>700+ pcs</ProductDetailsPricesPieces>
        </ProductDetailsPricesItem>
      </ProductDetailsPrices>

      <ProductDetailsContainer>
        <ProductDetailsGroup>
          <ProductDetailsGroupContainer>
            <ProductDetailsGroupTitle>Price:</ProductDetailsGroupTitle>
            <ProductDetailsGroupValue>Negotiable</ProductDetailsGroupValue>
          </ProductDetailsGroupContainer>
        </ProductDetailsGroup>

        <ProductDetailsGroup>
          <ProductDetailsGroupContainer>
            <ProductDetailsGroupTitle>Type:</ProductDetailsGroupTitle>
            <ProductDetailsGroupValue>Classic shoes</ProductDetailsGroupValue>
          </ProductDetailsGroupContainer>

          <ProductDetailsGroupContainer>
            <ProductDetailsGroupTitle>Material:</ProductDetailsGroupTitle>
            <ProductDetailsGroupValue>
              Plastic material
            </ProductDetailsGroupValue>
          </ProductDetailsGroupContainer>

          <ProductDetailsGroupContainer>
            <ProductDetailsGroupTitle>Design:</ProductDetailsGroupTitle>
            <ProductDetailsGroupValue>Modern nice</ProductDetailsGroupValue>
          </ProductDetailsGroupContainer>
        </ProductDetailsGroup>

        <ProductDetailsGroup>
          <ProductDetailsGroupContainer>
            <ProductDetailsGroupTitle>Customization:</ProductDetailsGroupTitle>
            <ProductDetailsGroupValue>
              Customized logo and design custom packages
            </ProductDetailsGroupValue>
          </ProductDetailsGroupContainer>

          <ProductDetailsGroupContainer>
            <ProductDetailsGroupTitle>Protection:</ProductDetailsGroupTitle>
            <ProductDetailsGroupValue>Refund Policy</ProductDetailsGroupValue>
          </ProductDetailsGroupContainer>

          <ProductDetailsGroupContainer>
            <ProductDetailsGroupTitle>Warranty:</ProductDetailsGroupTitle>
            <ProductDetailsGroupValue>
              2 years full warranty
            </ProductDetailsGroupValue>
          </ProductDetailsGroupContainer>
        </ProductDetailsGroup>
      </ProductDetailsContainer>
    </ProductDetailsWrapper>
  );
}

export default ProductDetails;
