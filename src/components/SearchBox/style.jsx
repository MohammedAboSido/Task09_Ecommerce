import styled from "@emotion/styled";

export const SearchBoxWrapper = styled("div")`
  label: SearchBoxWrapper;
  display: flex;
  border: 2px solid ${({ theme }) => theme.pallet.blueColor};
  border-radius: 5px;
  overflow: hidden;
  flex: 1;
  & > :nth-child(3) {
    border-radius: 0;
    width: fit-content;
    padding: 0 1.5rem;
  }
`;

export const SearchInput = styled("input")`
  label: SearchInput;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: none;
  border-right: 2px solid ${({ theme }) => theme.pallet.blueColor};
  outline: none;
  border-radius: 0;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
`;
export const Categories = styled("select")`
  label: PhoneKeys;
  transition: all 0.3s ease-in-out;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: none;
  outline: none;
  border-radius: 0;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Category = styled("option")`
  label: PhoneKey;
`;
