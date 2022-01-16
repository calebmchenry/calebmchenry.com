import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <title>Home | Caleb McHenry</title>
      {/* <StaticImage src="../images/sunflower.jpg" alt="Caleb in a sunflower field" /> */}
      <h1>
        Hello
        <span role="img" aria-label="Wave emoji">
          👋
        </span>{" "}
        my name is Caleb McHenry{" "}
      </h1>
      <p>I am a believer in pair programming and test driven development.</p>
      <p>
        I have a love for learning new programming languages. My first love is{" "}
        <s>JavaScript</s>{" "}
        <a href="https://www.typescriptlang.org/">TypeScript</a>. I like to
        dabble in other languages like <a href="https://elm-lang.org/">Elm</a>,{" "}
        <a href="https://go.dev/">Go</a>,{" "}
        <a href="https://www.rust-lang.org/">Rust</a>, and{" "}
        <a href="https://www.haskell.org/">Haskell</a>.
      </p>
    </main>
  );
};

export default IndexPage;
