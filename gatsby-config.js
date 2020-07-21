
module.exports = {
  siteMetadata: {
    title: `Art Bachmann' portfolio-resume`,
    description: `Gatsby site with Material-UI`,
    author: `@artbachmann`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WordPressArt',
        fieldName: 'wordPressArt',
        url: 'http://test.artbachmann.fi/art-bachmann-tmi/graphql',
        refetchInterval: 60
      }
    },

    {
      resolve: 'gatsby-source-wordpress',
      options: {
        minimizeDeprecationNotice: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
        ],
        baseUrl: 'test.artbachmann.fi/art-bachmann-tmi',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://test.artbachmann.fi/art-bachmann-tmi',
          replacementUrl: '',
        },
      },
    },

    // {
    //   resolve: `gatsby-source-wordpress-experimental`,
    //   options: {
    //     /*
    //      * The full URL of the WordPress site's GraphQL API.
    //      * Example : 'https://www.example-site.com/graphql'
    //      */
    //     url: `http://test.artbachmann.fi/art-bachmann-tmi/graphql`,
    //   },
    // },

    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Teko',
            variants: ['200', '400', '500', '600', '700'],
          },
          {
            family: 'Proza Libre',
            variants: ['400', '500', '600', '700'],
          },
          {
            family: 'Open Sans',
            variants: ['200', '400', '500', '600', '700'],
          },
        ],
      },
    },
  ],
}
