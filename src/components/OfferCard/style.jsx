import styled from "@emotion/styled";

export const OfferCardWrapper = styled("div")`
  label: OfferCardWrapper;
  color: white;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#55bdc4")};
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
