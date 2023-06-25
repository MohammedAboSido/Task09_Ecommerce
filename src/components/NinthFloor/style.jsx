import styled from "@emotion/styled";

export const NinthFloorWrapper = styled("div")`
  label: NinthFloorWrapper;
  background-color: ${({ theme }) => theme.pallet.greyColor2};
  padding: 2.5rem 1rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const NinthFloorTitle = styled("h3")`
  label: NinthFloorTitle;
  font-weight: 600;
  font-size: 1.5rem;
`;
export const NinthFloorDetails = styled("p")`
  label: NinthFloorDetails;
  font-size: 1rem;
  color: ${({ theme }) => theme.pallet.greyColor4};
`;
export const NinthFloorContainer = styled("div")`
  label: NinthFloorContainer;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > :last-child {
    width: fit-content;
  }
  @media (max-width: 300px) {
    flex-direction: column;
  }
`;
export const NinthFloorInputWrapper = styled("div")`
  label: NinthFloorInputWrapper;
  position: relative;
  padding: 0.5rem;
  .NinthFloorIcon {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.pallet.greyColor};
  }
`;
export const NinthFloorInput = styled("input")`
  label: NinthFloorInput;
  width: 100%;
  padding: ${({ theme }) => theme.fontSizes.body}rem;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor};
  outline: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  padding-left: 2rem;
`;
