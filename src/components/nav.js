// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { throttle } from '@utils'
import { navLinks, navHeight } from '@config'
import styled from 'styled-components'
import { theme, mixins, media } from '@styles'
const { colors, fontSizes, fonts } = theme

const NavContainer = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 0px 50px;
    background-color: ${colors.white};
    transition: ${theme.transition};
    z-index: 11;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    width: 100%;
    height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
    box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none'};
    transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
    );
    ${media.desktop`padding: 0 40px;`};
    ${media.tablet`padding: 0 25px;`};
    `;

const Navbar = styled.nav`
    ${mixins.flexBetween};
    position: relative;
    width: 100%;
    color: ${colors.lightestSlate};
    font-family: ${fonts.SFMono};
    counter-reset: item 0;
    z-index: 12;
    `;

const Hamburger = styled.div`
    ${mixins.flexCenter};
    overflow: visible;
    margin: 0 -12px 0 0;
    padding: 15px;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    text-transform: none;
    color: ${colors.dark};
    border: 0;
    background-color: transparent;
    display: none;
    ${media.tablet`display: flex;`};
    `;

const HamburgerBox = styled.div`
    position: relative;
    display: inline-block;
    width: ${theme.hamburgerWidth}px;
    height: 24px;
    `;

const HamburgerInner = styled.div`
    background-color: ${colors.dark};
    position: absolute;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    border-radius: ${theme.borderRadius};
    top: 50%;
    left: 0;
    right: 0;
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
    content: '';
    display: block;
    background-color: ${colors.dark};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    }
    &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
    }
    &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
    }
    `;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    ${media.tablet`display: none;`};
    `;

const NavList = styled.ol`
    div {
    ${mixins.flexBetween};
    }
    `;

const NavListItem = styled.li`
    margin: 0 10px;
    position: relative;
    font-size: ${fontSizes.medium};
    &:before {
    text-align: right;
    color: ${colors.dark};
    font-size: ${fontSizes.xsmall};
    }
    `;

const NavLink = styled(AnchorLink)`
    color: ${colors.dark};
    padding: 12px 10px;
    `;

const Nav = () => {

    const [isMounted, SetIsMounted] = useState(false)
    const [menuOpen, SetMenuOpen] = useState(false)
    const [scrollDirection, SetScrollDirection] = useState('none')
    const [lastScrollTop, SetLastScrollTop] = useState(0)

    const toggleMenu = () => SetMenuOpen(!menuOpen);

    const handleResize = () => {
        if (window.innerWidth > 768 && menuOpen) {
            toggleMenu()
            }
    }

    const handleKeydown = (e) => {
        if (!menuOpen) {
            return
        }

        if (e.which === 27 || e.key === 'Escape') {
            toggleMenu()
        }
    }

    const handleScroll = () => {
        const fromTop = window.scrollY
        const DELTA = 10

        if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
            return
        }

        if (fromTop < DELTA) {
            SetScrollDirection('none')

        } else if (fromTop > lastScrollTop && fromTop > navHeight) {
            if (scrollDirection !== 'down') {
                SetScrollDirection('down')

        }

        } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
            if (scrollDirection !== 'up') {
            SetScrollDirection('up')
        }
        }

        SetLastScrollTop(fromTop)
    }

    useEffect( () => {

        setTimeout( () => SetIsMounted(true), 100)

        window.addEventListener('resize', () => throttle(handleResize()))
        window.addEventListener('keydown', (e) => handleKeydown(e))
        window.addEventListener('scroll', () => throttle(handleScroll()))
    
        return () => {

            SetIsMounted(false)

            window.removeEventListener('resize', () => handleResize())
            window.removeEventListener('keydown', (e) => handleKeydown(e))
            window.removeEventListener('scroll', () => handleScroll())
        }
    
    }, )

    return (
        <NavContainer scrollDirection={scrollDirection}>
            <Navbar>
                <TransitionGroup>
                    {isMounted && (
                        <CSSTransition classNames="fade" timeout={3000}>
                        <Hamburger onClick={toggleMenu}>
                            <HamburgerBox>
                                <HamburgerInner menuOpen={menuOpen} />
                            </HamburgerBox>
                        </Hamburger>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <NavLinks>
                    <NavList>
                        <TransitionGroup>
                        {isMounted &&
                            navLinks &&
                            navLinks.map(({ url, name }, i) => (
                            <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                                <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                                <NavLink href={url}>{name}</NavLink>
                            </NavListItem>
                            </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </NavList>
                </NavLinks>
            </Navbar>
        </NavContainer>
    )
}

export default Nav
