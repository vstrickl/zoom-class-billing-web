module.exports = {
  siteMetadata: {
    title: `Von | Fitness & BJJ (Online)`,
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
          "package",
          "purchase",
          "class-list",
          "new-student",
          "user",
          "attendance-record",
          "attendance-date",
        ],
        queryLimit: 1000,
      },
    },
  ],
}
