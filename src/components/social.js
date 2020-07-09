import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { socialMedia } from '@config'
import { FormattedIcon } from '@icons'
import styled from 'styled-components'
import { theme, media } from '@styles'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'
const { colors } = theme


const SocialContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: 40px;
    color: ${colors.dark};
    ${media.desktop`left: 25px;`};
    ${media.tablet`display: none;`};
    `
const SocialItemList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.dark};
    }
    `
const SocialItem = styled.li`
    &:last-of-type {
    margin-bottom: 20px;
    }
`;
const SocialLink = styled.a`
    padding: 10px;
    &:hover {
    color: ${colors.blue};
    }
    &:focus {
    transform: translateY(-3px);
    }
    svg {
    width: 18px;
    height: 18px;
    }
`;

const Social = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
    }, []);

    return (
    <SocialContainer>
        <TransitionGroup>
        {isMounted && (
            <CSSTransition timeout={3000} classNames="fade">
            <SocialItemList>
                {socialMedia &&
                socialMedia.map(({ url, name, handle }, i) => (
                    <SocialItem key={i}>
                    <Tooltip title={handle} position="right" trigger="mouseenter">
                        <SocialLink
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label={name}>
                        <FormattedIcon name={name} />
                        </SocialLink>
                    </Tooltip>
                    </SocialItem>
                ))}
            </SocialItemList>
            </CSSTransition>
        )}
        </TransitionGroup>
    </SocialContainer>
    );
    };

export default Social;
