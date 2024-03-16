import styled from "styled-components";
import React from "react";

const ContactContainer = styled.div`
    background-color: ${({theme}) => theme.background};
`;

const ContactInput = styled.input`
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.textSecondary};
    outline: none;
    font-size: 18px;
    color: ${({theme}) => theme.textPrimary};
    border-radius: 12px;
    padding: 12px 16px;
    transition: 0.2s ease-in-out;
    &:focus {
        border: 2px solid ${({theme}) => theme.primary};
        transition: 0.2s ease-in-out;
    }
`;

const ContactArea = styled.textarea`
    background: transparent;
    outline: none;
    border: 2px solid ${({theme}) => theme.textSecondary};
    color: ${({theme}) => theme.textPrimary};
    font-size: 18px;
    transition: 0.2s ease-in-out;
    &:focus {
        border: 2px solid ${({theme}) => theme.primary};
        transition: 0.2s ease-in-out;
    }
`;

const ContactButton = styled.button`
    background:  ${({theme}) => theme.primary};
    
    &:disabled{
        background: transparent;
        color: transparent;
        cursor: default;
    }
`
const Contact = () => {
    return(
        <>
            <ContactContainer className="mb-4 bg-gray-900 px-8 py-4 rounded-lg" id='contact'>
                <p className="text-center my-4 text-xl">Feel free to contact me!</p>
                    <form action="" className="flex flex-col items-center justify-center gap-y-4">
                        <ContactInput className="min-w-96 rounded-xl p-2" type="text" name="message-sender-email" placeholder="Email..."/>
                        <ContactInput className="min-w-96 rounded-xl p-2" type="text" name="message-sender-name" placeholder="Name..."/>
                        <ContactArea className="min-w-96 rounded-xl p-2" name="message-text"
                                  id="message-text" cols="30" rows="10" placeholder="Message..."></ContactArea>
                        <ContactButton className="rounded-full w-32 h-8" type="submit">Send email</ContactButton>
                    </form>
            </ContactContainer>
        </>
    )
}
export default Contact;