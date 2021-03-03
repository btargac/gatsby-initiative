module.exports = {
  siteMetadata: {
  	description: "Playing with Gatsby just for fun",
    title: "My Gatsby Initiative",
  },
  plugins: [
  	`gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    }
    ,
    "gatsby-plugin-mdx",
  ]
};
