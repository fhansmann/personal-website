
const config = require('./src/config');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
          "@utils": "src/utils",
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

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: "https://gmail.us10.list-manage.com/subscribe/post?u=ed01ea28210c6f80750334ad6&amp;id=13ca7a3e9b"
      },
    },

    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ]
}
