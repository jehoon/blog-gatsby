module.exports = {
  siteMetadata: {
    siteUrl: 'https://jehoon.gatsbyjs.io',
    title: 'blog jehoon',
    author: `My Name`,
    description: '글 꾸준히 써보려고 만듬',
    // Used for resolving images in social cards
    siteUrl: `https://jehoon.gatsbyjs.io`,
    // Used for social links in the root footer
    social: [
      {
        name: `Github`,
        url: `https://github.com/jehoon`,
      },
    ],
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-gatsby-cloud", {
    resolve: `gatsby-theme-blog`,
    options: {
      // basePath defaults to `/`
      basePath: `/blog`,
    },
  },],
};
