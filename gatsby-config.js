module.exports = {
  siteMetadata: {
    title: 'Scot Race Consult - South Africa',
    author: '@gatsbify.team',
    description: 'Chartered Accountants in South Africa - Scot Race Consult',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-preact`,
    `gatsby-plugin-lodash`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'scot-race-consult',
        short_name: 's-r-c',
        start_url: '/',
        background_color: 'rgb(106, 110, 100)',
        theme_color: 'rgb(106, 110, 100)',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.webp', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
