import styled from "@emotion/styled";

export const FeaturesWrapper = styled("div")`
  label: FeaturesWrapper;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
