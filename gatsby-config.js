module.exports = {
  siteMetadata: {
    title: `La Raza Unida Party`,
    description: `Raza Unida Party - Congreso`,
    author: `@bmediax`,
    siteUrl: `https://congreso.razaunida.org`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `congreso-raza-unida-party`,
        short_name: `congreso`,
        start_url: `/`,
        background_color: `#F5821F`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
