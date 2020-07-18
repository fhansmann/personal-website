import React from 'react'
import styled from 'styled-components'
import { theme } from '@styles'
const { colors } = theme

const StyledBurger = styled.button`
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 11;

    span {
    width: 2rem;
    height: 0.2rem;
    padding: 2px;
    margin: 3px;
    background-color: ${colors.darkSlateGrey};
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

const Burger = ({ open, setOpen, ...props }) => {

    return (
    <StyledBurger 
        open={open} 
        onClick={() => setOpen(!open)} {...props}>
        <span />
        <span />
        <span />
    </StyledBurger>
    )
}


export default Burger