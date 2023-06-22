import styled from "@emotion/styled";

export const ServicesCardWrapper = styled("div")`
  label: ServicesCardWrapper;
  background-color: ${({ theme }) => theme.pallet.whiteColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.pallet.greyColor2};
  cursor: pointer;
  overflow: hidden;
  flex: 1 200px;
  &:hover img {
    transform: scale(1.2);
  }
`;

export const ServicesCardContainer = styled("div")`
  label: ServicesCardContainer;
  position: relative;
  overflow: hidden;
  background-color: black;
  height: 130px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const ServicesCardIconContainer = styled("div")`
  label: ServicesCardIconContainer;
  position: relative;
`;

export const ServicesCardIcon = styled("div")`
  label: ServicesCardIcon;
  position: absolute;
  background-color: ${({ theme }) => theme.pallet.blueColor8};
  padding: 0.8rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.pallet.whiteColor};
  right: 5%;
  top: -25px;
`;

export const ServicesCardImg = styled("img")`
  label: ServicesCardImg;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
  object-fit: cover;
`;

export const ServicesCardTitle = styled("span")`
  label: ServicesCardTitle;
  padding: 1rem;
  display: inline-block;
  font-weight: 500;
  width: 70%;
`;
