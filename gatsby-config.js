module.exports = {
  siteMetadata: {
    title: `Online Fitness Billing App`,
    description: `A billing app for Online Fitness Classes.`,
    author: `Vonique Stricklen`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
