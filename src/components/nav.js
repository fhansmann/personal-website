import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { navLinks, navHeight } from '@config'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import { theme, mixins, media } from '@styles'
const { colors, fontSizes } = theme

const NavList = styled.ol`
    div {
    ${mixins.flexBetween};
    }
    `

const NavListItem = styled.li`
    margin: 0 10px;
    position: relative;
    font-size: ${fontSizes.medium};
    &:before {
    text-align: right;
    color: ${colors.dark};
    font-size: ${fontSizes.xsmall};
    }
    `

const NavLink = styled(AnchorLink)`
    color: ${colors.dark};
    padding: 12px 10px;
    `

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    ${media.tablet`display: none;`};
    `

const Nav = () => {

    const [isMounted, SetIsMounted] = useState(false)
    const [menuOpen, SetMenuOpen] = useState(false)
 

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

    
    useEffect( () => {

        setTimeout( () => SetIsMounted(true), 100)

        window.addEventListener('resize', () => handleResize())
        window.addEventListener('keydown', (e) => handleKeydown(e))

    
        return () => {

            SetIsMounted(false)

            window.removeEventListener('resize', () => handleResize())
            window.removeEventListener('keydown', (e) => handleKeydown(e))
        }
    
    }, )

    return (
        <NavLinks>
            <NavList>
                <TransitionGroup>
                {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                    <CSSTransition key={i} classNames="fade" timeout={3000}>
                        <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                            <NavLink href={url}>{name}</NavLink>
                        </NavListItem>
                    </CSSTransition>
                    ))}
                </TransitionGroup>
            </NavList>
        </NavLinks>
    )
}

export default Nav
