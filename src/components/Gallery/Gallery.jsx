import React from "react";
import img1 from "../../assets/images/clothing.png";
import img2 from "../../assets/images/clothing1.png";
import img3 from "../../assets/images/clothing2.png";
import img4 from "../../assets/images/clothing3.png";
import img5 from "../../assets/images/clothing4.png";
import img6 from "../../assets/images/clothing5.png";
import img7 from "../../assets/images/clothing6.png";
import {
  GalleryBottom,
  GalleryBottomImg,
  GalleryTop,
  GalleryTopImg,
  GalleryWrapper,
} from "./style";
function Gallery() {
  return (
    <GalleryWrapper>
      <GalleryTop>
        <GalleryTopImg src={img1} />
      </GalleryTop>
      <GalleryBottom>
        <GalleryBottomImg src={img2} />
        <GalleryBottomImg src={img3} />
        <GalleryBottomImg src={img4} />
        <GalleryBottomImg src={img5} />
        <GalleryBottomImg src={img6} />
        <GalleryBottomImg src={img7} />
      </GalleryBottom>
    </GalleryWrapper>
  );
}

export default Gallery;
