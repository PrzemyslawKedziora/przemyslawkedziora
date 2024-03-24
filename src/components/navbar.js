import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

const NavContainer = styled.div`
    background: ${({theme}) => theme.cardLight};
    color: ${({theme}) => theme.textPrimary};
    font-size: 1rem;
`;
const ThemeSwitch = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.primary};
        transition: 0.2s ease-in-out;
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const SwitchIcon = styled.svg`
    width: 2.5rem;
    height: 2.5rem;
`;
export const ListItem = styled.a`
    transition: 0.3s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary};
}`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
      display: block;
      font-size: 18px;
      cursor: pointer;
      color: ${({theme}) => theme.textPrimary};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;
  gap: 16px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({theme}) => theme.cardLight};
  transition:0.6s ease-in-out;
  transform: ${({isOpen}) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({isOpen}) => (isOpen ? '98%' : '0')};
  z-index: ${({isOpen}) => (isOpen ? '1000' : '-1000')};
`

const MobileLink = styled.a`
  color: ${({theme}) => theme.textPrimary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    color: ${({theme}) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme}) => theme.primary};
  }
`;
const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Navbar = ({onThemeToggle}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <NavContainer className="flex justify-between p-4 sticky top-0 z-10">
                <div className="text-2xl">
                    <ListItem href="#about">Przemysław Kędziora</ListItem>
                </div>
                <MobileIcon>
                    <span onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                        <MenuIcon/>
                    </span>
                </MobileIcon>
                <NavItems>
                        <ListItem href="#about">About Me</ListItem>
                    <ListItem href="#education">Education</ListItem>
                    <ListItem href="#projects">Projects</ListItem>
                        <ListItem href="#contact">Contact</ListItem>
                </NavItems>
                <ThemeSwitch>
                        <SwitchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} onClick={onThemeToggle}
                                    stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591
                               1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                        </SwitchIcon>
                </ThemeSwitch>
                { isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="#about" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>About</MobileLink>

                        <MobileLink href='#education' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Education</MobileLink>
                        <MobileLink href='#projects' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Projects</MobileLink>
                        <MobileLink href='#contact' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Contact</MobileLink>
                            <SwitchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} onClick={onThemeToggle}
                                        stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591
                               1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                            </SwitchIcon>
                    </MobileMenu>
                }
            </NavContainer>
        </>
    );
};

export default Navbar;
