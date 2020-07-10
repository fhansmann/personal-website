import React from "react"
import { graphql } from 'gatsby'
import {Layout, Hero} from '@components'
import styled from 'styled-components'
import { Main } from '@styles'


const MainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({data}) => (
  <Layout>
      <MainContainer>
        <Hero data={data.hero.edges}/>
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
  }
`

