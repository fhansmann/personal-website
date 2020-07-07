import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { navLinks } from '@config'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import { theme } from '@styles'
const { colors, fontSizes, fonts } = theme

const Navbar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 10px;
    background-color: ${colors.white};
    width: 100%;
    `
const NavList = styled.ol`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    `
const NavListItem = styled.li`
    margin: 0 10px;
    position: relative;
    font-size: ${fontSizes.medium};
    color: ${colors.lightestSlate};
    font-family: ${fonts.SFMono};
    `
const NavLink = styled(AnchorLink)`
    color: ${colors.dark};
    padding: 12px 10px;
    `

const Nav = () => {

    const [isMounted, SetIsMounted] = useState(false)

    useEffect( () => {

        setTimeout( () => SetIsMounted(true), 100)

    }, )

    return (

    <Navbar>
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
    </Navbar>

    )
}

export default Nav
