import { css } from "@emotion/react";

const globalStyle = (theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    background-color: ${theme.pallet.bgPrimary};
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyle;
