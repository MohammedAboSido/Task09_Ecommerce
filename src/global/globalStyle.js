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

  table {
    border-collapse: collapse;
  }

  a {
    text-decoration: none;
  }

  .link {
    color: ${theme.pallet.blueColor};
  }
`;

export default globalStyle;
