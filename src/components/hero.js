import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fonts } = theme;
import TextLoop from 'react-text-loop';

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Hi = styled.h1`
  color: ${colors.dark};
  margin: 0 0 20px 3px;
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: 60px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
`;
const Name = styled.h2`
  color: ${colors.dark};
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 150px;
  line-height: 1.1;
  color: ${colors.dark};
  ${media.desktop`font-size: 100px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <Hi style={{ transitionDelay: '100ms' }}>
      <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <span>Hi! I'm</span>
        <span>Salut! Je suis </span>
        <span> مرحباَ أنا</span>
        <span>¡Hola! Soy</span>
        <span>Hallo! Ich bin</span>
      </TextLoop>
    </Hi>
  );

  const two = () => <Name style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</Name>;
  const three = () => (
    <Subtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</Subtitle>
  );
  const four = () => (
    <Blurb style={{ transitionDelay: '400ms' }} dangerouslySetInnerHTML={{ __html: html }} />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <EmailLink href={`mailto:${email}`}>Get In Touch</EmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <HeroContainer>
      <TransitionGroup>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </HeroContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
