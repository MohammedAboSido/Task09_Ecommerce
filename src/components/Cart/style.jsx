import styled from "@emotion/styled";

export const CartWrapper = styled("div")`
  label: CartWrapper;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  flex: 1 500px;
`;

export const CartContainer = styled("div")`
  label: CartContainer;
  display: flex;
  align-content: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  & > button {
    width: fit-content;
  }
  & > :first-child {
    color: white;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & > button {
      width: 100%;
    }
  }
`;

export const CartRemoveBtn = styled("button")`
  label: CartRemoveBtn;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-weight: 600;
  background-color: white;
  color: ${({ theme }) => theme.pallet.blueColor};
  &:hover {
    background-color: ${({ theme }) => theme.pallet.greyColor7};
  }
`;
