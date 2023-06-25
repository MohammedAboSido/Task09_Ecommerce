import styled from "@emotion/styled";

export const RegionWrapper = styled("div")`
  label: RegionWrapper;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  min-width: 200px;
  @media (max-width: 600px) {
    flex: 1;
  }
`;
export const RegionImg = styled("img")`
  label: RegionImg;
  object-fit: contain;
  max-width: 60px;
  max-height: 60px;
`;
export const RegionContainer = styled("div")`
  label: RegionContainer;
  display: flex;
  flex-direction: column;
`;
export const RegionName = styled("span")`
  label: RegionName;
  font-size: 1.1rem;
  font-weight: 400;
`;
export const RegionDetails = styled("span")`
  label: RegionDetails;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.pallet.greyColor};
`;
