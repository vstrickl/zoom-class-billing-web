module.exports = {
  siteMetadata: {
    title: `Online Fitness Billing App`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.DEPLOY_URL,
        contentTypes: [
          "class-list",
          "new-student",
          "user",
        ],
        queryLimit: 1000,
      },
    },
  ],
}
