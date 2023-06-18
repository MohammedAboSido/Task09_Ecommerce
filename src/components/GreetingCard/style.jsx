import styled from "@emotion/styled";

export const GreetingCardWrapper = styled("div")`
  label: GreetingCardWrapper;
  background-color: ${({ theme }) => theme.pallet.blueColor8};
  border-radius: 5px;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  @media (max-width: 1285px) {
    flex: 2;
  }
`;
export const GreetingCardPerson = styled("div")`
  label: GreetingCardPerson;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
`;
export const GreetingCardImg = styled("img")`
  label: GreetingCardImg;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  padding-top: 0.5rem;
  cursor: pointer;
  object-fit: contain;
  background-color: #c7e1ff;
`;
export const GreetingCardMessage = styled("div")`
  label: GreetingCardMessage;
  display: flex;
  flex-direction: column;
`;
export const GreetingCardSpan = styled("span")`
  label: GreetingCardSpan;
  white-space: nowrap;
`;
export const GreetingCardJoinBtn = styled("button")`
  label: GreetingCardWrapper;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  ${({ theme }) =>
    `background-color:  ${theme.pallet.blueColor6};color:${theme.pallet.whiteColor};`}
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  &:hover {
    ${({ theme }) =>
      `background-color:  ${theme.pallet.blueColor};color:${theme.pallet.whiteColor};`}
  }
`;
export const GreetingCardLearnBtn = styled("button")`
  label: GreetingCardLearnBtn;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 500;

  ${({ theme }) =>
    ` background-color: ${theme.pallet.whiteColor}; color:${theme.pallet.blueColor};`}
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  &:hover {
    ${({ theme }) =>
      ` background-color: ${theme.pallet.greyColor5}; color:${theme.pallet.blueColor};`}
  }
`;
