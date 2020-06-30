import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js'
import { Head } from '@components'
import { particleConfig } from './particleBg'
import { GlobalStyle } from '@styles';

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

    render={({site}) => (
      <div id="root">
        <Head metadata={site.siteMetadata} />
        <Particles params={particleConfig} style={ParticlesStyle} />
        <GlobalStyle />
        <div className="container">
        </div>
      </div>
    )}
  />
)

export default Layout
