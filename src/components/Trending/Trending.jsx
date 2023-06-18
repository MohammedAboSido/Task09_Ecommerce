import React from "react";
import Banner from "../../assets/images/Banner.png";
import {
  TrendingButton,
  TrendingContainer,
  TrendingImg,
  TrendingSpan,
  TrendingTitle,
  TrendingWrapper,
} from "./style";
function Trending() {
  return (
    <TrendingWrapper>
      <TrendingImg src={Banner} />
      <TrendingContainer>
        <TrendingSpan>Last trending</TrendingSpan>
        <TrendingTitle>Electronic items</TrendingTitle>
        <TrendingButton>Learn more</TrendingButton>
      </TrendingContainer>
    </TrendingWrapper>
  );
}

export default Trending;
