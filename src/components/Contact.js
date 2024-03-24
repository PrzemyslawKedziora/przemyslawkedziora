import styled from "styled-components";
import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {environment} from "../utils/environment";
import Snackbar from '@mui/material/Snackbar';

const ContactContainer = styled.div`
    background-color: ${({theme}) => theme.background};
    position: relative;
    margin: 4rem 0;
    min-width: 35%;
    -webkit-box-shadow: 0 0 20px 2px ${({theme}) => theme.cardLight};;
    -moz-box-shadow: 0 0 20px 2px ${({theme}) => theme.cardLight};;
    box-shadow: 0 0 20px 2px ${({theme}) => theme.primary};
    z-index: 1;
`;

const ContactInput = styled.input`
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.textSecondary};
    outline: none;
    width: 90%;
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
    width: 90%;
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
    width: 90%;
    transition: 0.2s ease-in-out;
    &:hover{
        background:  ${({theme}) => theme.cardLight};
    }
    &:disabled{
        background: transparent;
        border: 1px solid ${({theme}) => theme.primary};
        color: ${({theme}) => theme.textSecondary};
        cursor: not-allowed;
    }
`
const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();
    const [name, setName] = useState(String);
    const [email, setEmail] = useState(String);
    const [message, setMessage] = useState(String);

    const buttonEnabled = () => {
        const validEmail = email.length > 8;
        const validFromName = name.length > 2;
        const validMessage = message.length > 15;

        return validEmail && validFromName && validMessage;
    }
    const sendEmail = (e) => {
        e.preventDefault();
        setOpen(true);
        emailjs
            .sendForm(environment.emailjsServiceID, environment.emailjsTemplateID, form.current, {
                publicKey: environment.emailjsPublicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!',{name,email,message});
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return(
        <>
            <ContactContainer className="mb-4 px-8 py-4 rounded-lg" id='contact'>
                <p className="text-center my-4 text-xl">Feel free to contact me!</p>
                    <form className="flex flex-col items-center justify-center gap-y-4" ref={form} onSubmit={sendEmail}>
                        <ContactInput className="rounded-xl p-2" type="text" name="email" placeholder="Email..."
                                      onChange={(email)=>setEmail(email.target.value)}/>
                        <ContactInput className="rounded-xl p-2" type="text" name="name" placeholder="Name..."
                                      onChange={(name)=>setName(name.target.value)}/>
                        <ContactArea className="rounded-xl p-2" name="message"
                                  id="message-text" cols="30" rows="10" placeholder="Message..."
                                     onChange={(message)=>setMessage(message.target.value)}/>
                        <ContactButton className="rounded-full w-32 h-8" type="submit" disabled={!buttonEnabled()}>Send email</ContactButton>
                        <Snackbar
                            open={open}
                            autoHideDuration={3000}
                            variant="soft"
                            severity="success"
                            onClose={()=> {
                                setOpen(false);
                            }}
                            message="Email has been succesfully sent!"
                            anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                        />

                    </form>
            </ContactContainer>
        </>
    )
}
export default Contact;