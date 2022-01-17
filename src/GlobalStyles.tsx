import React from "react";
import { css, Global } from "@emotion/react";
const global = css`
  html {
    font-size: 10px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    margin: 0;
    font-size: 2rem;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;
export function GlobalStyles() {
  return <Global styles={global}></Global>;
}
