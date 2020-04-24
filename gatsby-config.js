module.exports = {
  siteMetadata: {
    title: `Charlie Say | Portfolio`,
    name: `Charlie Say`,
    description: `Creative freelancer from Manchester UK.`,
    author: `@charliesay`,
    social: {
      twitter: '//twitter.com/charliesay_',
      instagram: '//instagram.com/charliesay',
      behance: '//www.behance.net/charliewsab1fe',
    },
    footerLinks: [
      {
        name: 'ABOUT',
        url: '/about'
      },
      {
        name: 'PORTFOLIO',
        url: '/portfolio'
      },
      {
        name: 'CONTACT',
        url: '/contact-me'
      }
    ]
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
  ],
}
