module.exports = {
  siteMetadata: {
    title: `Charlie Say | Portfolio`,
    name: `Charlie Say`,
    description: `Creative freelancer from Manchester UK.`,
    author: `@charliesay`,
    social: {
      twitter: "//twitter.com/charliesay_",
      instagram: "//instagram.com/charliesay",
      behance: "//www.behance.net/charliewsab1fe",
    },
    footerLinks: [
      {
        name: "ABOUT",
        url: "/",
      },
      {
        name: "PORTFOLIO",
        url: "/",
      },
      {
        name: "CONTACT",
        url: "/contact",
      },
    ],
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
    `gatsby-plugin-sass`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
