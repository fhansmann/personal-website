import React, {useState, useEffect} from 'react'
import { socialMedia } from '@config'
import { FormattedIcon } from '@icons'
import styled from 'styled-components'
import { theme } from '@styles'
import { window } from 'browser-monads'
const { colors } = theme

const SocialContainer = styled.div`
    width: 40px;
    hight: 100vh;
    position: fixed;
    bottom: 0;
    left: 40px;
    color: ${colors.darkSlateGrey};
    @media only screen (max-width: 768px){
    display: none;
    }
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
    background-color: ${colors.darkSlateGrey};

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
`

 

const useViewport = () => {
    const [width, setWidth] = useState(1280)
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);

    return { width };
    }


const Social = () => {

    const { width } = useViewport()
    const breakpoint = 768

    return ( width > breakpoint ?
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
    :
    <>
    </>
)
}


export default Social
