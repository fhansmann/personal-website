import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import sr from '@utils/sr'
import { srConfig } from '@config'
import styled from 'styled-components'
import { theme, mixins, media, Section, Heading } from '@styles'
const { colors, fontSizes, fonts } = theme
import Stories from 'react-insta-stories'

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  flex-direction: row-reverse;
  align-items: flex-start;
  ${media.bigDesktop`display: block;`};
`;

const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${colors.dark};
  &:before {
    content: '⚡';
    position: absolute;
    left: 0;
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  /* position: relative; */
  width: 40%;
  max-width: 300px;
  padding-top: 1em;
  ${media.tablet`width: 70%;`};
  ${media.thone`width: 50%;`};
  ${media.phablet`width: 70%;`};
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  const stories = [
    {
      url: 'https://i.ibb.co/zV9fH0c/profilepic.jpg',
      alt: 'me'
    },
    {
      url:
        'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/67732824_2350700738345959_5507470433772896256_n.jpg?_nc_cat=106&_nc_oc=AQkHm94qKv5dKdTZMP5c7Rgy9JIAb4Kk57FthSSH6kgCxCXOqPTZhK0yC8qidgX1K1c&_nc_ht=scontent-mxp1-1.xx&oh=2f10a07ebd7c760951149a6bbd9dc9f7&oe=5E003966',
          alt: 'me'
    },
    {
      url:
        'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/58374628_832576700432472_519047085484408832_o.jpg?_nc_cat=109&_nc_oc=AQlg_73Tqr2dB0vNg9cqTuXLCwtrP-xXnGdMnE-ZlDcduOeZx4u0C3z6BaVYcy0HueE&_nc_ht=scontent-mxp1-1.xx&oh=e9cf32db8a9ef9fdca80079b92a4e208&oe=5E396C13',
      alt: 'me'
    },
    {
      url:
        'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/58376104_832579863765489_1899329684701708288_o.jpg?_nc_cat=103&_nc_oc=AQnwC8RFGCmEsjOtzI9-a6y-9EtIP6BNrHAf3Fwe_qRcvU0YQcWaVSuThzhfCcF_r_Q&_nc_ht=scontent-mxp1-1.xx&oh=d899349ec8de12dfd0c32ba411ad26bf&oe=5E3451CD',
      alt: 'me'
    },
    // { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video' },
  ];

  return (
    <AboutContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </ContentContainer>
        <PicContainer>
          <StoriesContainer>
            <Stories
              stories={stories}
              defaultInterval={3000}
              width={300}
              height={500}
              loop={true}
            />
          </StoriesContainer>
        </PicContainer>
      </FlexContainer>
    </AboutContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;

// const Avatar = styled(Img)`
//   position: relative;
//   border-radius: ${theme.borderRadius};
//   transition: ${theme.transition};
// `;
const StoriesContainer = styled.div`
  ${mixins.boxShadow};
  /* position: relative; */
`;
