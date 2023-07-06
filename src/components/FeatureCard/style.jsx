import styled from "@emotion/styled";

export const FeatureCardWrapper = styled("div")`
  label: FeatureCardWrapper;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FeatureCardIcon = styled("div")`
  label: FeatureCardIcon;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.pallet.greyColor2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.pallet.greyColor4};
  & > svg {
    font-size: 1.4rem;
  }
`;

export const FeatureCardContainer = styled("div")`
  label: FeatureCardContainer;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const FeatureCardTitle = styled("span")`
  label: FeatureCardTitle;
  color: ${({ theme }) => theme.pallet.blackColor3};
`;

export const FeatureCardDescription = styled("span")`
  label: FeatureCardDescription;
  color: ${({ theme }) => theme.pallet.greyColor4};
`;
