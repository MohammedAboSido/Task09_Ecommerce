import React from "react";
import Input from "../Input/Input";
import MainButton from "../MainButton/MainButton";
import {
  PhoneKey,
  PhoneKeys,
  QuoteContainer,
  QuoteDetails,
  QuoteTitle,
  QuoteWrapper,
} from "./style";

function Quote() {
  return (
    <QuoteWrapper>
      <QuoteTitle>Send quote to suppliers</QuoteTitle>
      <Input
        placeholder="What item you need?"
        type="text"
        id="item"
        name="item"
      />
      <QuoteDetails placeholder="Type more details" />
      <QuoteContainer>
        <Input
          placeholder="Quantity"
          type="text"
          id="quantity"
          name="quantity"
        />
        <PhoneKeys>
          <PhoneKey>Pcs</PhoneKey>
          <PhoneKey>Pcs1</PhoneKey>
          <PhoneKey>Pcs2</PhoneKey>
        </PhoneKeys>
      </QuoteContainer>
      <MainButton name="Send inquiry" className="quotesButton" />
    </QuoteWrapper>
  );
}
export default Quote;
