import React from "react";
import { css } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";

export function Layout({ children }: React.PropsWithChildren<{}>) {
  const card = css`
    max-width: 780px;
    margin: 0 auto;
    width: 100%;
    padding: 24px;
  `;
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <main>
        <div css={card}>{children}</div>
      </main>
    </>
  );
}
