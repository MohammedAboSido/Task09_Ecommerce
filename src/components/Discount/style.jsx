import styled from "@emotion/styled";

export const DiscountWrapper = styled("div")`
  label: DiscountWrapper;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  @media (max-width: 750px) {
    flex-direction: column;
    height: auto;
    background-color: ${({ theme }) => theme.pallet.blueColor};
  }
`;

export const DiscountLeft = styled("div")`
  label: DiscountLeft;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.pallet.blueColor};
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const DiscountTitle = styled("h3")`
  label: DiscountTitle;
  color: ${({ theme }) => theme.pallet.whiteColor};
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 280px) {
    font-size: 1.2rem;
  }
`;

export const DiscountDescription = styled("span")`
  label: DiscountDescription;
  color: ${({ theme }) => theme.pallet.greyColor2};
  font-weight: 500;
  @media (max-width: 280px) {
    font-size: 0.8rem;
  }
`;

export const DiscountRight = styled("div")`
  label: DiscountRight;
  padding: 0 2rem;
  width: 30%;
  height: 200%;
  background-color: ${({ theme }) => theme.pallet.blueColor6};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    width: 100%;
    padding: 2rem;
  }
  & > button {
    width: fit-content;
    background-color: ${({ theme }) => theme.pallet.orangeColor};
    &:hover {
      background-color: ${({ theme }) => theme.pallet.orangeColor};
    }
  }
`;
export const DiscountRightContainer = styled("div")`
  label: DiscountRightContainer;
  min-width: 30px;
  height: 100%;
  background-color: ${({ theme }) => theme.pallet.blueColor6};
  transform: skewX(10deg) translateX(-2.5rem);
  @media (max-width: 750px) {
    display: none;
  }
`;
