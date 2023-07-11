import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import Links from "./../Links/Links";
import Table from "./../Table/Table";
import {
  DetailsDescription,
  DetailsItem,
  DetailsItems,
  DetailsTitle,
  DetailsWrapper,
} from "./style";
function Details() {
  return (
    <DetailsWrapper>
      <Links />
      <DetailsDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </DetailsDescription>

      <Table />
      <DetailsItems>
        <DetailsItem>
          <CheckIcon />
          <DetailsTitle> Some great feature name here</DetailsTitle>
        </DetailsItem>
        <DetailsItem>
          <CheckIcon />
          <DetailsTitle> Lorem ipsum dolor sit amet, consectetur</DetailsTitle>
        </DetailsItem>
        <DetailsItem>
          <CheckIcon />
          <DetailsTitle> Duis aute irure dolor in reprehenderit</DetailsTitle>
        </DetailsItem>
        <DetailsItem>
          <CheckIcon />
          <DetailsTitle> Some great feature name here</DetailsTitle>
        </DetailsItem>
      </DetailsItems>
    </DetailsWrapper>
  );
}

export default Details;
