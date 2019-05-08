module.exports = {
  pathPrefix: '/another-gatsby-no-blur-demo',
  siteMetadata: {
    title: 'Another Gatsby no blur demo',
    siteUrl: 'https://raulrpearson.github.io/another-gatsby-no-blur-demo'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          { resolve: 'gatsby-remark-images', options: { maxWidth: 1440 } }
        ]
      }
    }
  ]
};
