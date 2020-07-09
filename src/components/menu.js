import React from 'react'
import styled from 'styled-components'
import { navLinks } from '@config'
import { NavListItem, NavLink } from "./nav"

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    text-align: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    }

    a {
    padding: 1.5rem 0;
    }
    `

const Menu = ({ open }) => {

    return (
    <StyledMenu open={open} >
        {   
            navLinks.map(({ url, name }, i) => (
            <NavListItem key={i}>
                <NavLink href={url}>{name}</NavLink>
            </NavListItem>
    ))}
    </StyledMenu>
    )
}

export default Menu