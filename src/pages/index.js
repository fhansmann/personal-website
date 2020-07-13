import React from "react"
import { graphql } from 'gatsby'
import {Layout, Hero, About} from '@components'
import styled from 'styled-components'
import { Main } from '@styles'


const MainContainer = styled(Main)`
  counter-reset: section;
`

const IndexPage = ({data}) => (
    <Layout>
        <MainContainer>
          <Hero data={data.hero.edges}/>
          <About data={data.about.edges}/>
        </MainContainer>
    </Layout>
)


export default IndexPage 

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
    edges {
      node {
          frontmatter{
            title
            name
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
  }
`

