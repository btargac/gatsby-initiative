module.exports = {
  siteMetadata: {
  	description: "The long awaited blog from Targac",
    title: "Targac's Blog",
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
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "8j6daael",
        dataset: "production",
      },
    },
    "gatsby-plugin-mdx",
  ]
};
