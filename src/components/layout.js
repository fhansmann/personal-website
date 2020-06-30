import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js'

// Style of the particles.js background container
const ParticlesStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '-2',
};

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

    render={() => (
      <div id="root">
        <Head metadata={site.siteMetadata} />
        <Particles params={particleConfig} style={ParticlesStyle} />
        <GlobalStyle />
        <div className="container">
          <Nav />
          <Social />
          <Footer />
        </div>
      </div>
    )}
  />
)

export default Layout
