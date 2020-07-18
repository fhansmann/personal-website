import React from "react"
import { graphql } from 'gatsby'
import {Layout, Hero, About, Projects, Contact} from '@components'
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
          <Projects data={data.projects.edges}/>
          <Contact data={data.contact.edges}/>
        </MainContainer>
    </Layout>
)


export default IndexPage 

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
    edges {
      node {
        frontmatter {
            name
            subtitle
            title  
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

    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external
          }
          html
        }
      }
    }

    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

