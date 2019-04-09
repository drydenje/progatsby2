module.exports = {
  siteMetadata: {
    title: `LevelUp Tutorials: Pro Gatsby 2`,
    description: `Working through the LevelUp Tutorials Gatsby 2 guide`,
    author: `@itsmejeremyd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
       resolve: 'gatsby-source-filesystem',
       options: {
          path: `${__dirname}/src/posts`,
          name: 'posts',
       }
    },
    `gatsby-plugin-styled-components`,
  ],
}
