import React from "react";
import { css } from "styled-components";
import { spacingUnit, medium, xLarge } from "../styles/variables";
import { secondaryTextColor } from "../styles/colors";

function Greeting() {
  const containerStyles = css`
    margin-bottom: calc(2 * ${spacingUnit});
    padding-top: calc(2 * ${spacingUnit});

    @media (${xLarge}) {
      padding-top: calc(4 * ${spacingUnit});
    }
  `;

  const helloHeadingStyles = css`
    font-size: 3.2rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: calc(2 * ${spacingUnit});

    @media (${medium}) {
      font-size: 4rem;
    }
  `;

  const myNameIsStyles = css`
    font-family: "Pacifico", cursive;
    font-size: 2.4rem;
    color: ${secondaryTextColor};
  `;

  const nameHeadingStyles = css`
    font-size: 4.8rem;
    margin: 0;
    margin-bottom: calc(2 * ${spacingUnit});
    @media (${medium}) {
      font-size: 5rem;
    }
  `;

  const statementStyles = css`
    font-size: 2.4rem;
    font-weight: 400;
    color: ${secondaryTextColor};
  `;

  const messageStyles = css`
    font-size: 2.4rem;
    font-weight: 400;
    color: ${secondaryTextColor};
  `;

  return (
    <div css={containerStyles}>
      <h2 css={helloHeadingStyles}>
        Hello!{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h2>
      <span css={myNameIsStyles}>My name is</span>
      <h1 css={nameHeadingStyles}>Caleb McHenry</h1>
      <span css={statementStyles}>I write code for fun!</span>
      <p css={messageStyles}>
        I enjoy learning, teaching, and coding. I mostly do web development with{" "}
        <a href="https://www.typescriptlang.org/">JavaScript</a>, but I have
        been known to dabble in other languages like{" "}
        <a href="https://www.rust-lang.org/">Rust</a> and{" "}
        <a href="https://golang.org/">Golang.</a>
      </p>
    </div>
  );
}

export default Greeting;
