import styled from "@emotion/styled";
import quoteBg from "../../assets/images/image-102.png";
export const FifthFloorWrapper = styled("div")`
  label: FifthFloorWrapper;
  background-image: url(${quoteBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
  @media (max-width: 280px) {
    padding: 0.5rem;
  }
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      #2c7cf1 0%,
      rgba(25, 25, 241) 0%,
      rgba(0, 213, 255, 0.658)
    );
  }
`;
export const FifthFloorContainer = styled("div")`
  label: FifthFloorContainer;
  z-index: 2;
  width: 37%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  @media (max-width: 1050px) {
    flex: 1 25rem;
  }
`;
export const FifthFloorTitle = styled("h3")`
  label: FifthFloorTitle;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  @media (max-width: 280px) {
    font-size: 1rem;
  }
`;
export const FifthFloorDetails = styled("p")`
  label: FifthFloorDetails;
  color: white;
  font-size: 0.98rem;
`;
