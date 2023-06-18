import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/avatar.png";
import { PATH } from "./../../constants/index";
import {
  GreetingCardImg,
  GreetingCardJoinBtn,
  GreetingCardLearnBtn,
  GreetingCardMessage,
  GreetingCardPerson,
  GreetingCardSpan,
  GreetingCardWrapper,
} from "./style";
function GreetingCard() {
  return (
    <GreetingCardWrapper>
      <GreetingCardPerson>
        <GreetingCardImg src={profile} />
        <GreetingCardMessage>
          <GreetingCardSpan>Hi, user</GreetingCardSpan>
          <GreetingCardSpan>let’s get stated</GreetingCardSpan>
        </GreetingCardMessage>
      </GreetingCardPerson>
      <Link to={PATH.REGISTER}>
        <GreetingCardJoinBtn>Join now</GreetingCardJoinBtn>
      </Link>
      <Link to={"#"}>
        <GreetingCardLearnBtn>Learn more</GreetingCardLearnBtn>
      </Link>
    </GreetingCardWrapper>
  );
}

export default GreetingCard;
