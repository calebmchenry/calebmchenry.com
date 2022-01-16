module.exports = {
  siteMetadata: {
    title: `Caleb McHenry`,
    siteUrl: `https://www.calebmchenry.com`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
  ],
};
