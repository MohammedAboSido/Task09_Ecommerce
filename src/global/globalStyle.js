import { css } from "@emotion/react";

const globalStyle = (theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.pallet.bgPrimary};
    font-family: "Inter", sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyle;
