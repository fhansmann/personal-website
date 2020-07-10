import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { theme } from '@styles'
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`
const StyledOverline = styled.h1`
  color: ${colors.slate};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
`
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  color: ${colors.slate};
  }

  &:hover {
    -webkit-animation: GradientAnimation 2s ease infinite;
    animation: GradientAnimation 2s ease infinite;
    text-decoration: none;
    background: rgba(0, 0, 0, 0) -webkit-gradient(linear, left top, right top, from(#90f3b3), color-stop(#90e9f3), color-stop(#909ff3), color-stop(#cc90f3), color-stop(#f390d1), color-stop(#f39a90), color-stop(#f3e590), to(#b8f390)) repeat scroll 0% 0%/200% 200%;
    background: rgba(0, 0, 0, 0) linear-gradient(90deg, #90f3b3, #90e9f3, #909ff3, #cc90f3, #f390d1, #f39a90, #f3e590, #b8f390) repeat scroll 0% 0%/200% 200%;
      background-clip: border-box;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

    @keyframes GradientAnimation {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
  }
  

`
const StyledSubtitle = styled.h3`
  font-size: 60px;
  line-height: 1.1;
  color: ${colors.slate};
`
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 65%;
  max-width: 600px;
  color: ${colors.slate};
`


const Hero = ({ data }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [])

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  )
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  )
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  )
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
 

  const items = [one, two, three, four]
  console.log(items)
  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  )
}


export default Hero
