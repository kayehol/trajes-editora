module.exports = {
  siteMetadata: {
    title: `Editora Trajes Solares/Lunares`,
    description: `Site da editora Trajes Solares/Lunares.`,
    author: `Kayê Holanda`,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //`gatsby-plugin-image`,
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
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://trajeseditora.com.br/graphql",
      },
    },
    {
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        api: 'trajeseditora.com.br',
        verbose: true,
        https: true,
        api_keys: {
          consumer_key: 'ck_492439395609f62d3e2c7f0f6f80e20ab4a12ea1',
          consumer_secret: 'cs_ac97ab2d1e5a9358c8656e408e13767f4a5d2067',
        },
        fields: ['products', 'products/categories'],
        query_string_auth: false,
        api_version: 'wc/v3',
        per_page: 10,
        encoding: 'utf8'
      }
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
