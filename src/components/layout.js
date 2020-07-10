import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { Head, Nav, Social, Footer } from '@components'
import { GlobalStyle } from '@styles'


const Layout = () => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `}

    render={({site}) => (
      <div>
        <Head metadata={site.siteMetadata} />
        <GlobalStyle />
        <Nav />
        <Social />
        <Footer />
      </div>
    )}
  />
)

export default Layout
