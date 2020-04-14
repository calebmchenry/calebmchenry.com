import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import SocialMediaGroup from '../components/SocialMediaGroup';
import Greeting from '../components/Greeting';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Greeting />
      <SocialMediaGroup />
    </Layout>
  );
}

export default IndexPage;
