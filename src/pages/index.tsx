import React from "react";
import { Layout } from "../Layout";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <title>Home | Caleb McHenry</title>
        <h1>
          Hello{" "}
          <span role="img" aria-label="Wave emoji">
            👋
          </span>{" "}
          my name is Caleb McHenry
        </h1>
        <p>
          I am full stack web developer with a passion for code health and
          maintainability.
        </p>
        <p>
          I ️
          <span role="img" aria-label="Wave emoji">
            ❤️
          </span>{" "}
          pair programming and tests.
        </p>
        <p>
          Learning new languages is my jam. My first love is <s>JavaScript</s>{" "}
          <a href="https://www.typescriptlang.org/">TypeScript</a>. I also like
          to dabble in other languages like{" "}
          <a href="https://elm-lang.org/">Elm</a>,{" "}
          <a href="https://go.dev/">Go</a>,{" "}
          <a href="https://www.rust-lang.org/">Rust</a>, and{" "}
          <a href="https://www.haskell.org/">Haskell</a>.
        </p>
        <h2>
          Here are some useful links
          <span role="img" aria-label="point down emoji">
            👇
          </span>
        </h2>
        <ul>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="https://github.com/calebmchenry">Github</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=q2w259RAPxw">Youtube</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/caleb-mchenry-75301a152/">
              LinkedIn
            </a>
          </li>
        </ul>
      </Layout>
    </>
  );
};

export default IndexPage;
