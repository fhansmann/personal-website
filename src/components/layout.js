import React from "react"
import { StaticQuery, graphql } from 'gatsby'
//import Particles from 'react-particles-js'
import { Head } from '@components'
//import { particleConfig } from './particleBg'
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
      <div id="root">
        <Head metadata={site.siteMetadata} />
        <GlobalStyle />
        <div className="container">
        </div>
      </div>
    )}
  />
)

export default Layout
