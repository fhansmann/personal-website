import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.button`
    position: absolute;
    top: 5%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    }
`;

export const Burger = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
    <StyledBurger 
        aria-label="Toggle menu" 
        aria-expanded={isExpanded} 
        open={open} 
        onClick={() => setOpen(!open)} {...props}>
        <span />
        <span />
        <span />
    </StyledBurger>
    )
}


