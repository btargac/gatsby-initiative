module.exports = {
  siteMetadata: {
  	description: "Things I've learned along the way, can help your journey too.",
    title: "Targac's Blog",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
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
