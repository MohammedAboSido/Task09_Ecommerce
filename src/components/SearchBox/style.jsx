import styled from "@emotion/styled";

export const SearchBoxWrapper = styled("div")`
  label: SearchBoxWrapper;
  display: flex;
  border: 2px solid ${({ theme }) => theme.pallet.blueColor};
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1100px) {
    flex: 1 75%;
  }
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
  /* flex-wrap: wrap; */
  & > :nth-child(3) {
    border-radius: 0;
    width: fit-content;
    padding: 0 1.5rem;
    min-width: 100px;
    @media (max-width: 840px) {
      width: 100%;
      padding: 0.5rem 1.5rem;
    }
  }
`;

export const SearchInput = styled("input")`
  label: SearchInput;
  width: 100%;
  min-width: 250px;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: none;
  border-right: 2px solid ${({ theme }) => theme.pallet.blueColor};
  outline: none;
  border-radius: 0;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  @media (max-width: 700px) {
    border-right: none;
    border-bottom: 2px solid ${({ theme }) => theme.pallet.blueColor};
  }
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
