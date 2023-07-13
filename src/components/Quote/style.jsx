import styled from "@emotion/styled";

export const QuoteWrapper = styled("div")`
  label: QuoteWrapper;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 2;
  & > button {
    width: fit-content;
  }
  @media (max-width: 1050px) {
    width: 100%;
  }
`;
export const QuoteTitle = styled("h3")`
  label: QuoteTitle;
  font-weight: 600;
  font-size: 1.2rem;
`;
export const QuoteDetails = styled("textarea")`
  label: QuoteDetails;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  outline: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  padding-right: 2rem;
  resize: none;
  height: 5rem;
`;
export const QuoteContainer = styled("div")`
  label: QuoteContainer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const PhoneKeys = styled("select")`
  label: PhoneKeys;
  transition: all 0.3s ease-in-out;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  outline: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  cursor: pointer;
  flex: 1 200px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PhoneKey = styled("option")`
  label: PhoneKey;
`;
