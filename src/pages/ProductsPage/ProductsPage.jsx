import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import fiveStar from "../../assets/images/fiveStars.svg";
import fourStar from "../../assets/images/fourStars.svg";
import img2 from "../../assets/images/image-22.png";
import img4 from "../../assets/images/image-32.png";
import img6 from "../../assets/images/image-34.png";
import img1 from "../../assets/images/imgstore1.png";
import img3 from "../../assets/images/imgstore2.png";
import img7 from "../../assets/images/imgstore4.png";
import img5 from "../../assets/images/imgstore5.png";
import threeStar from "../../assets/images/threeStars.svg";
import twoStar from "../../assets/images/twoStars.svg";
import DiscountCard from "../../components/DiscountCard/DiscountCard";
import { Container } from "../../global/components";
import BottomFooter from "./../../components/BottomFooter/BottomFooter";
import BottomHeader from "./../../components/BottomHeader/BottomHeader";
import Menu from "./../../components/Menu/Menu";
import NinthFloor from "./../../components/NinthFloor/NinthFloor";
import TopFooter from "./../../components/TopFooter/TopFooter";
import TopHeader from "./../../components/TopHeader/TopHeader";
import {
  ProductsPageContainer,
  ProductsPageLeft,
  ProductsPageRight,
  ProductsPageRoute,
  ProductsPageRoutes,
  ProductsPageWrapper,
} from "./style";
function ProductsPage() {
  return (
    <ProductsPageWrapper>
      <TopHeader />
      <BottomHeader />
      <Container>
        <ProductsPageRoutes>
          <ProductsPageRoute>
            Home <KeyboardArrowRightIcon />
          </ProductsPageRoute>
          <ProductsPageRoute>
            Clothings <KeyboardArrowRightIcon />
          </ProductsPageRoute>
          <ProductsPageRoute>
            Men’s wear <KeyboardArrowRightIcon />
          </ProductsPageRoute>
          <ProductsPageRoute>Summer clothing </ProductsPageRoute>
        </ProductsPageRoutes>
        <ProductsPageContainer>
          <ProductsPageLeft>
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
          </ProductsPageLeft>
          <ProductsPageRight>
            <DiscountCard
              img={img1}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img2}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img3}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img4}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img5}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img2}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img6}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img7}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
            <DiscountCard
              img={img1}
              description="GoPro HERO6 4K Action Camera - Black"
              newPrice="$998.00"
              oldPrice="$1128.00"
              rate="7.5"
              react={<FavoriteBorderIcon />}
              star={<StarIcon />}
            />
          </ProductsPageRight>
        </ProductsPageContainer>
      </Container>
      <NinthFloor />
      <TopFooter />
      <BottomFooter />
    </ProductsPageWrapper>
  );
}
export default ProductsPage;
