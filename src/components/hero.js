import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { theme, Section } from '@styles'
import { FormattedIcon } from '@icons'
const { colors, fonts, navDelay, loaderDelay } = theme

const Wrapper = styled(Section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  position: relative;
`
const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`
const StyledContentContainer = styled.div`
  padding: 0px,
  margin: 0px;
`
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: 25px;
  font-family: ${fonts.SFMono};
  font-weight: normal;
`
const StyledTitle = styled.h2`
  font-size: 75px;
  line-height: 1.1;
  margin: 0;
  color: ${colors.darkSlateGrey};
  }
`
const StyledSubtitle = styled.h3`
  font-size: 55px;
  line-height: 1.1;
  color: ${colors.slate};
`
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 80%;
  max-width: 650px;
  color: ${colors.darkSlateGrey};
`
const StyledPicture = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  flex-grow: 0.55;
`

const Hero = ({ data }) => {

  const [isMounted, setIsMounted] = useState(false);

  const revealContainer = useRef(null);
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

  return (
    <Wrapper id="home" ref={revealContainer}>
      <StyledFlexContainer>
        <StyledContentContainer>
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  {item}
                </CSSTransition>
              ))}
          </TransitionGroup>
        </StyledContentContainer>
        <TransitionGroup component={null}>
            {isMounted &&
            <CSSTransition classNames="fadeup" >
              <StyledPicture style={{ transitionDelay: '700ms' }}>
                <FormattedIcon name={"Avatar"} />
              </StyledPicture>
            </CSSTransition>
            }
        </TransitionGroup>
      </StyledFlexContainer>
    </Wrapper>
  )
}


export default Hero
