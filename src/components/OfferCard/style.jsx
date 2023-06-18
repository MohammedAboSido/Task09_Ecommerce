import styled from "@emotion/styled";

export const OfferCardWrapper = styled("div")`
  label: OfferCardWrapper;
  color: ${({ textColor }) => (textColor ? textColor : "black")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  padding: 1rem;
  padding-right: 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  flex: 1;
  padding-right: 20%;
  display: flex;
  align-items: center;
`;
