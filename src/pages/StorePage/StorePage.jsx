import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import fiveStar from "../../assets/images/fiveStars.svg";
import fourStar from "../../assets/images/fourStars.svg";
import img4 from "../../assets/images/image-32.png";
import img6 from "../../assets/images/image-34.png";
import img1 from "../../assets/images/imgstore1.png";
import img3 from "../../assets/images/imgstore2.png";
import img7 from "../../assets/images/imgstore4.png";
import img5 from "../../assets/images/imgstore5.png";
import threeStar from "../../assets/images/threeStars.svg";
import twoStar from "../../assets/images/twoStars.svg";
import BottomFooter from "../../components/BottomFooter/BottomFooter";
import BottomHeader from "../../components/BottomHeader/BottomHeader";
import Menu from "../../components/Menu/Menu";
import NinthFloor from "../../components/NinthFloor/NinthFloor";
import StoreCard from "../../components/StoreCard/StoreCard";
import TopFooter from "../../components/TopFooter/TopFooter";
import TopHeader from "../../components/TopHeader/TopHeader";
import { Container } from "../../global/components";

import {
  StorePageContainer,
  StorePageLeft,
  StorePageRight,
  StorePageRoute,
  StorePageRoutes,
  StorePageWrapper,
} from "./style";
function StorePage() {
  return (
    <StorePageWrapper>
      <TopHeader />
      <BottomHeader />
      <Container>
        <StorePageRoutes>
          <StorePageRoute>
            Home <KeyboardArrowRightIcon />
          </StorePageRoute>
          <StorePageRoute>
            Clothings <KeyboardArrowRightIcon />
          </StorePageRoute>
          <StorePageRoute>
            Men’s wear <KeyboardArrowRightIcon />
          </StorePageRoute>
          <StorePageRoute>Summer clothing </StorePageRoute>
        </StorePageRoutes>
        <StorePageContainer>
          <StorePageLeft>
            <Menu
              id="A1"
              title="Category"
              items={[
                "Mobile accessory",
                "Electronics",
                "Smartphones",
                "Modern tech",
              ]}
              isSeeAll={true}
              type=""
              name=""
            />
            <Menu
              id="A2"
              title="Brands"
              items={["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]}
              isSeeAll={true}
              type="checkbox"
              name=""
            />
            <Menu
              id="A3"
              title="Features"
              items={[
                "Metallic",
                "Plastic cover",
                "8GB Ram",
                "Super power",
                "Large Memory",
              ]}
              isSeeAll={true}
              type="checkbox"
              name=""
            />
            <Menu
              id="A4"
              title="Condition"
              items={["Any", "Refurbished", "Brand new", "Old items"]}
              isSeeAll={true}
              type="radio"
              name="condition"
            />
            <Menu
              id="A5"
              title="Ratings"
              items={[
                <img src={fiveStar} alt="" />,
                <img src={fourStar} alt="" />,
                <img src={threeStar} alt="" />,
                <img src={twoStar} alt="" />,
              ]}
              isSeeAll={false}
              type="checkbox"
              name=""
            />
          </StorePageLeft>
          <StorePageRight>
            <StoreCard
              title="Canon Cmera EOS 2000, Black 10x zoom"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              order="154 orders"
              dot={<FiberManualRecordIcon />}
              img={img1}
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <StoreCard
              title="GoPro HERO6 4K Action Camera - Black"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              order="154 orders"
              dot={<FiberManualRecordIcon />}
              img={img3}
              newPrice="$998.00"
              oldPrice=""
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <StoreCard
              title="GoPro HERO6 4K Action Camera - Black"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              order="154 orders"
              dot={<FiberManualRecordIcon />}
              img={img4}
              newPrice="$998.00"
              oldPrice=""
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />

            <StoreCard
              title="GoPro HERO6 4K Action Camera - Black"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              order="154 orders"
              dot={<FiberManualRecordIcon />}
              img={img6}
              newPrice="$998.00"
              oldPrice=""
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />

            <StoreCard
              title="GoPro HERO6 4K Action Camera - Black"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              order="154 orders"
              dot={<FiberManualRecordIcon />}
              img={img7}
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />

            <StoreCard
              title="GoPro HERO6 4K Action Camera - Black"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              order="154 orders"
              dot={<FiberManualRecordIcon />}
              img={img5}
              newPrice="$998.00"
              oldPrice=""
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
          </StorePageRight>
        </StorePageContainer>
      </Container>
      <NinthFloor />
      <TopFooter />
      <BottomFooter />
    </StorePageWrapper>
  );
}
export default StorePage;
