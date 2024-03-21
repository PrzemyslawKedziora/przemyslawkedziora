import React from "react";
import styled from "styled-components";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import about from "./About/About";
import {aboutMe} from "../assets/data";
import {ListItem} from "./navbar";


const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const NavContainer = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    justify-content: center;
`
const Icon = styled.a`
    display: inline-block;
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
        cursor: pointer;
    }
`
const Footer = () =>{
    return(
        <>
        <FooterContainer>
            <NavContainer>
                <ListItem>
                    <a href="#about">About Me</a>
                </ListItem>
                <ListItem>
                    <a href="#education">Education</a>
                </ListItem>
                <ListItem>
                    <a href="#projects">Projects</a>
                </ListItem>
                <ListItem>
                    <a href="#contact">Contact</a>
                </ListItem>
            </NavContainer>
            <div>
                <p target="display">
                    <a style={{width: '37px', height: '37px'}}/>
                </p>
                <p target="display">
                    <div style={{width: '33px', height: '33px'}}/>
                </p>
                <p  target='display'>
                    <a style={{width: '37px', height: '37px'}}/>
                </p>
            </div>
            <div className="icons flex gap-x-6 mb-4">
                   <Icon href={aboutMe.mailingLink}>
                       <EmailIcon style={{width: '37px', height: '37px'}}/>
                   </Icon>
                <Icon href={aboutMe.githubLink}>
                    <GitHubIcon style={{width: '37px', height: '37px'}}/>
                </Icon>
                <Icon href={aboutMe.linkedinLink}>
                    <LinkedInIcon style={{width: '37px', height: '37px'}}/>
                </Icon>
            </div>
            <div>
                &copy; 2024 Przemysław Kędziora. All rights reserved.
            </div>
        </FooterContainer>
        </>
    )
}

export default Footer;