import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <p>
      Hello! Welcome to my website. I am a web developer from West Virginia.
      This website was made with gatsby and the source code can be found{' '}
      <a href="https://github.com/calebmchenry/calebmchenry.com">here</a>.
    </p>

    <p>
      I am a lover of languages (both programmed and spoken). JavaScript is the
      language I first fell in love with but my current endeavors have me
      studying <a href="https://www.rust-lang.org/">Rust</a> in my free time. I
      hope to invest more time into <a href="https://golang.org/">Go</a> in the
      near future too.
    </p>

    <p>
      I am a firm believer in the importance of testing and automation for
      developing long lasting software.
    </p>
  </Layout>
);

export default AboutMe;
