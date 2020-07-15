import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { navLinks } from '@config'
import { Link } from 'gatsby';
import styled from 'styled-components'
import { theme } from '@styles'
import { Burger, Menu } from '@components'
const { colors, fontSizes, fonts } = theme

const Navbar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    padding-top: 10px;
    background-color: ${colors.white};
    width: 100%;
    z-index: 10;
    `
const NavList = styled.ol`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    `
export const NavListItem = styled.li`
    margin: 0 10px;
    position: relative;
    font-size: ${fontSizes.medium};
    font-family: ${fonts.SFMono};
    `
export const NavLink = styled(Link)`
    color: ${colors.darkSlateGrey};
    padding: 12px 10px;
    `

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);

    return { width };
    }

const useOnClickOutside = (ref, handler) => {

    useEffect(() => {
        const listener = (e) => {
        if (!ref.current || ref.current.contains(e.target)) {
            return
        }
        handler(e)
        }
        document.addEventListener('mousedown', listener);
        return () => {
        document.removeEventListener('mousedown', listener);
        }
    },
    [ref, handler],
    )
    } 

const Nav = () => {

    const [isMounted, SetIsMounted] = useState(false)
    
    const { width } = useViewport()
    const breakpoint = 768

    const [open, setOpen] = useState(false)
    const node = useRef()
  
    useOnClickOutside(node, () => setOpen(false));

    useEffect( () => {
        setTimeout( () => SetIsMounted(true), 100)
    }, [])

    return ( width > breakpoint ?
    <Navbar>
        <NavList>
            <TransitionGroup>
            {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                    <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                        <NavLink to ={url}>{name}</NavLink>
                    </NavListItem>
                </CSSTransition>
                ))}
            </TransitionGroup>
        </NavList>
    </Navbar>

    :
    
    <Navbar>
        <NavList ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </NavList>
    </Navbar>
    )
}

export default Nav
