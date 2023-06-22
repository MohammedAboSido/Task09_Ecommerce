import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import img1 from "../../assets/images/industry.png";
import img2 from "../../assets/images/product.png";
import img4 from "../../assets/images/product2.png";
import img3 from "../../assets/images/fly.png";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Container } from "../../global/components";
import {
  SeventhFloorWrapper,
  SeventhFloorCards,
  SeventhFloorTitle,
} from "./style";

function SeventhFloor() {
  return (
    <Container>
      <SeventhFloorWrapper>
        <SeventhFloorTitle>Our extra services</SeventhFloorTitle>
        <SeventhFloorCards>
          <ServicesCard
            img={img1}
            title="Source from Industry Hubs"
            icon={<SearchIcon />}
          />
          <ServicesCard
            img={img2}
            title="Customize Your Products"
            icon={<Inventory2OutlinedIcon />}
          />
          <ServicesCard
            img={img3}
            title="Fast, reliable shipping by ocean or air"
            icon={<SendOutlinedIcon />}
          />
          <ServicesCard
            img={img4}
            title="Product monitoring and inspection"
            icon={<SecurityOutlinedIcon />}
          />
        </SeventhFloorCards>
      </SeventhFloorWrapper>
    </Container>
  );
}

export default SeventhFloor;
