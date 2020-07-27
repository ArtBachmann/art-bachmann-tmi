
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

    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'WordPressArt',
    //     fieldName: 'wordPressArt',
    //     url: 'http://test.artbachmann.fi/art-bachmann-tmi/graphql',
    //     refetchInterval: 60
    //   }
    // },

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
    //     url:
    //       `'http://test.artbachmann.fi/art-bachmann-tmi/graphql`,
    //     verbose: true,
    //     useACF: true,
    //     schema: {
    //       queryDepth: 5,
    //       typePrefix: `Wp`,
    //       timeout: 30000,
    //     },
    //     develop: {
    //       nodeUpdateInterval: 3000,
    //       hardCacheMediaFiles: false,
    //     },
    //     production: {
    //       hardCacheMediaFiles: false,
    //     },
    //     debug: {
    //       graphql: {
    //         showQueryOnError: false,
    //         showQueryVarsOnError: true,
    //         copyQueryOnError: true,
    //         panicOnError: true,
    //         // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
    //         onlyReportCriticalErrors: true,
    //       },
    //     },

    //     includedRoutes: [
    //       "**/categories",
    //       "**/posts",
    //       "**/pages",
    //       "**/media",
    //       "**/tags",
    //       "**/taxonomies",
    //       "**/users",
    //       "**/menus",
    //     ],

    //     excludeFields: [`blocksJSON`, `saveContent`],
    //     type: {
    //       Post: {
    //         limit:
    //           process.env.NODE_ENV === `development`
    //             ? // Lets just pull 50 posts in development to make it easy on ourselves.
    //             50
    //             : // and we don't actually need more than 5000 in production for this particular site
    //             5000,
    //       },
    //       // this shows how to exclude entire types from the schema
    //       // these examples are for wp-graphql-gutenberg
    //       CoreParagraphBlockAttributes: {
    //         exclude: true,
    //       },
    //       CoreParagraphBlockAttributesV2: {
    //         exclude: true,
    //       },
    //       CorePullquoteBlockAttributes: {
    //         exclude: true,
    //       },
    //     },
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
