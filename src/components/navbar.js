import React, {useContext} from "react";
import styled, {ThemeContext} from "styled-components";

const NavContainer = styled.div`
    background: ${({theme}) => theme.cardLight};
    color: ${({theme}) => theme.textPrimary};
    font-size: 1rem;
`;
const ThemeSwitch = styled.div`
    &:hover{
        color: ${({theme}) => theme.primary};
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }
`
const Navbar = ({onThemeToggle}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useContext(ThemeContext);

    return (
        <>
            <NavContainer className="flex justify-between p-4 sticky top-0 z-10">
                <div className="text-2xl">
                    <a href="#about">Przemysław Kędziora</a>
                </div>
                <div className="page-nav flex items-center gap-x-[6vw]">
                    <p>
                        <a href="#about">About Me</a>
                    </p>
                    <p>
                    <a href="#education">Education</a>
                    </p>
                    <p>
                    <a href="#projects">Projects</a>
                    </p>
                    <p>
                        <a href="#contact">Contact</a>
                    </p>
                </div>
                <ThemeSwitch>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} onClick={onThemeToggle}
                         stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591
                               1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                    </svg>
                </ThemeSwitch>
            </NavContainer>
        </>
    );
};

export default Navbar;
