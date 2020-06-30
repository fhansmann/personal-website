
const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components/index",
        },
        extensions: [
          "js",
        ]
      }
    }
  ]

}
