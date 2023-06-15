import styled from "@emotion/styled";

export const BottomHeaderBody = styled("div")`
  label: BottomHeaderBody;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  padding: 0.5rem 0;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
`;
export const BottomHeaderWrapper = styled("div")`
  label: BottomHeaderWrapper;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1115px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }
`;
export const BottomHeaderLeft = styled("div")`
  label: BottomHeaderLeft;
  width: 60%;
  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: 1115px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
export const BottomHeaderLeftLinks = styled("div")`
  label: BottomHeaderLeftLinks;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const BottomHeaderSpan = styled("span")`
  label: BottomHeaderLeftLink;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.pallet.blueColor};
  }
  @media (max-width: 750px) {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.pallet.blueColor};
      color: ${({ theme }) => theme.pallet.whiteColor};
    }
  }
`;

export const Selector = styled("select")`
  label: Selector;
  transition: all 0.3s ease-in-out;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: none;
  outline: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
export const Option = styled("option")`
  label: Option;
`;

export const BottomHeaderRight = styled("div")`
  label: BottomHeaderRight;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;
export const CountryFlags = styled("div")`
  label: CountryFlags;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`;
export const FlagImg = styled("img")`
  label: FlagImg;
`;
