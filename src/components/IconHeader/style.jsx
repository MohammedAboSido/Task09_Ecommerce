import styled from "@emotion/styled";

export const IconHeaderWrapper = styled("div")`
  label: IconHeaderWrapper;
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  &:hover {
    & > :nth-child(2) {
      color: ${({ theme }) => theme.pallet.blueColor};
    }
  }
`;

export const IconHeaderImg = styled("img")`
  label: IconHeaderImg;
  width: fit-content;
`;

export const IconHeaderTitle = styled("span")`
  label: IconHeaderTitle;
  color: ${({ theme }) => theme.pallet.greyColor};
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
`;
