import React from "react";
import { css } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";

export function Layout({ children }: React.PropsWithChildren<{}>) {
  const container = css`
    height: 100vh;
    width: 100vw;
  `;

  const main = css`
    height: 100%;
    width: 100%;
  `;

  const background = css`
    @media (min-width: 780px) {
      padding: 24px 0;
      background-image: linear-gradient(#0052cc 0%, #0052cc 200px, white 200px);
    }
    min-height: 100%;
    display: flex;
  `;

  const card = css`
    max-width: 780px;
    margin: 0 auto;
    width: 100%;
    padding: 32px;
    @media (min-width: 780px) {
      border-radius: 8px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
    background-color: white;
  `;
  return (
    <div css={container}>
      <GlobalStyles></GlobalStyles>
      <main css={main}>
        <div css={background}>
          <div css={card}>{children}</div>
        </div>
      </main>
    </div>
  );
}
