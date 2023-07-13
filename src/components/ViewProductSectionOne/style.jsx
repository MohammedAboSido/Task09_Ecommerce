import styled from "@emotion/styled";

export const ViewProductSectionOneWrapper = styled("div")`
  label: ViewProductSectionOneWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor1};
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;
