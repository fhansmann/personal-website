import React, { useEffect, useRef } from 'react'
import sr from '@utils/sr'
import { srConfig } from '@config'
import styled from 'styled-components'
import { theme, mixins, Heading } from '@styles'
import Img from 'gatsby-image'
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled.div`
    position: relative;
`
const StyledFlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const StyledContent = styled.div`
    width: 60%;
    max-width: 480px;
`
const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
`
const Skill = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${fonts.SFMono};
    font-size: 13px;
    color: ${colors.slate};
    &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.green};
        font-size: ${fontSizes.sm};
        line-height: 12px;
    }
`
const StyledPic = styled.div`
    position: relative;
    width: 40%;
    max-width: 300px;
    margin-left: 60px;
`
const StyledAvatar = styled(Img)`
    position: relative;
    filter: grayscale(100%) contrast(1.1);
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
`
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="about" ref={revealContainer}>
        <Heading>{title}</Heading>
        <StyledFlexContainer>
        <StyledContent>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
        </StyledContent>
        <StyledPic>
            <StyledAvatarLink>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
            </StyledAvatarLink>
        </StyledPic>
        </StyledFlexContainer>
    </StyledContainer>
    )
}

export default About
