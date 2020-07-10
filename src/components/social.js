import React from 'react'
import { socialMedia } from '@config'
import { FormattedIcon } from '@icons'
import styled from 'styled-components'
import { theme } from '@styles'
const { colors } = theme

const SocialContainer = styled.div`
    width: 40px;
    hight: 100vh;
    position: fixed;
    bottom: 0;
    left: 40px;
    color: ${colors.dark};
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

&:after {
    content: '';
    display: block;
    width: 1px;
    height: 130px;
    margin: 0 auto;
    background-color: ${colors.lightGrey};
    }

    li:last-of-type {
        margin-bottom: 20px;
    }
`

const StyledLink = styled.a`
    padding: 10px;
    &:hover,
    &:focus {
        transform: translateY(-5px);
    }
    svg {
        width: 28px;
        height: 28px;
    }
`;

const Social = () => (
    <SocialContainer>
        <StyledList>
        {socialMedia &&
            socialMedia.map(({ url, name }, i) => (
            <li key={i}>
                <StyledLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                <FormattedIcon name={name} />
                </StyledLink>
            </li>
            ))}
        </StyledList>
    </SocialContainer>
)

export default Social
