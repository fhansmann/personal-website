import React, { useEffect, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import sr from '@utils/sr'
import { srConfig } from '@config'
import { FormattedIcon } from '@icons'
import styled from 'styled-components'
import { theme, mixins, Button, Heading } from '@styles'
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
`
const StyledGrid = styled.div`
  margin-top: 20px;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
  }
`
const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: #f0f0f0;
`
const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-7px);
    }
  }
`
const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`
const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`
const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`
const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.darkNavy};
`
const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${colors.darkNavy};
  a {
    ${mixins.inlineLink};
  }
`
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: 13px;
    color: ${colors.slate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`
const StyledMoreButton = styled(Button)`
  margin: 50px auto 0;
`

const Projects = ({ data }) => {
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = firstSix;

  return (
    <StyledContainer>
      <Heading ref={revealTitle}>Selected Projects</Heading>
      <StyledGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title, tech } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <StyledProjectInner>
                      <header>
                        <StyledProjectHeader>
                          <StyledFolder>
                            <FormattedIcon name="Folder" />
                          </StyledFolder>
                          <StyledProjectLinks>
                            {github && (
                              <StyledIconLink
                                href={github}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="GitHub Link">
                                <FormattedIcon name="GitHub" />
                              </StyledIconLink>
                            )}
                            {external && (
                              <StyledIconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <FormattedIcon name="External" />
                              </StyledIconLink>
                            )}
                          </StyledProjectLinks>
                        </StyledProjectHeader>
                        <StyledProjectName>{title}</StyledProjectName>
                        <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                      <footer>
                        {tech && (
                          <StyledTechList>
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </StyledTechList>
                        )}
                      </footer>
                    </StyledProjectInner>
                  </StyledProject>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </StyledGrid>

      <StyledMoreButton>
        Show Full Archive
      </StyledMoreButton>
    </StyledContainer>
  );
};


export default Projects;
