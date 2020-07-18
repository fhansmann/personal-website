import React, { useEffect, useRef } from 'react'
import sr from '@utils/sr'
import { srConfig } from '@config'
import styled from 'styled-components'
import { theme, mixins, Heading, Section } from '@styles'
import  { MailChimp }  from '@components'
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 100px auto 100px;
  a {
    ${mixins.inlineLink};
  }
`
const StyledHeading = styled(Heading)`
  display: block;
  color: ${colors.green};
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
  }
  &:after {
    display: none;
  }
`
const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 40px;
  color: ${colors.lightSlate};
`

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledHeading>What&apos;s Next?</StyledHeading>

      <StyledTitle>{title}</StyledTitle>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <MailChimp/>


    </StyledContainer>
  )
}


export default Contact;
