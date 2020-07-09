
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
          "@styles": "src/styles/index",
          "@fonts": "src/fonts",
          "@utils": "src/utils/index",
          "@config": "src/config/index",
          "@icons": "src/icons/index" 
        },
        extensions: [
          "js",
        ]
      }
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Calibre"],
          urls: ["/styles/fonts.js"],
        },
      },
    },
  ]

}
