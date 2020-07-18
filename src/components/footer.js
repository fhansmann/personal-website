import React from 'react'
import styled from 'styled-components'
import { theme } from '@styles'
const { colors, fontSizes, fonts } = theme

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.white};
    color: ${colors.dark};
    text-align: center;
    height: auto;
    min-height: 70px;
`;

const Copy = styled.div`
    margin: 10px 0;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xsmall};
    line-height: 1;
`
const GithubLink = styled.a`
    color: ${colors.lightGrey};
`
const BottomText = styled.div`
    margin: 5px;
`

const Footer = () => (
    <FooterContainer>
        <Copy>
            <GithubLink
            href="https://github.com/fhansmann"
            target="_blank"
            rel="nofollow noopener noreferrer">
            <BottomText>Florian Hansmann | 2020</BottomText>
            </GithubLink>
        </Copy>
    </FooterContainer>
)

export default Footer