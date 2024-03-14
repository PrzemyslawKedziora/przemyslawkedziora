import React, {useContext} from "react";
import {ThemeContext} from "styled-components";

const Navbar = ({onThemeToggle}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useContext(ThemeContext);

    return (
        <>
            <div className="flex justify-between p-4">
                <div>Przemysław Kędziora</div>
                <div className="page-nav flex gap-x-[6vw]">
                    <p>About</p>
                    <p>Education</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
                <div className="main-settings">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} onClick={onThemeToggle}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591
                               1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                    </svg>

                </div>
            </div>
        </>
    );
};

export default Navbar;
