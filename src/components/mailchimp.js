import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, {useState} from 'react'
import { theme, Button } from '@styles'
import styled from 'styled-components'
const { colors, fontSizes, fonts } = theme

const SubmitButton = styled(Button)`
    font-size: 13px;
    margin-top: 1rem;
`
const InputForm = styled.input`
    color: ${colors.darkNavy};
    background-color: ${colors.white};
    width: 250px;
    border: none;
    margin-top: 1.1rem;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 2;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: ${colors.green};
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MailChimp = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        addToMailchimp(email)
        .then((data) => {
        })
        .catch(() => {
        });
    }
    const handleEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    }

    return (
        <form onSubmit={handleSubmit} >
            <Wrapper>
                <InputForm
                    placeholder="Enter your email here"
                    name="email"
                    type="text"
                    onChange={handleEmailChange} />
                <SubmitButton type="submit">Subscribe</SubmitButton>
            </Wrapper>
        </form>
    );
    };

    export default MailChimp