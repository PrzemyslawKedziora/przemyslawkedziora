import './App.css';
import './components/navbar.js';
import Navbar from "./components/navbar";
import {useState} from "react";
import {darkTheme, lightTheme} from "./utils/Themes";
import styled, {ThemeProvider} from "styled-components";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {

    const [currentTheme, setCurrentTheme] = useState(darkTheme);
    const Body = styled.div`
      background-color: ${({theme}) => theme.background};
      color: ${({theme}) => theme.textPrimary};
      width: 100%;
      height: 100vh;
      overflow-x: hidden;
    `
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        flex-wrap: wrap;
        background: linear-gradient(38.73deg, ${({theme}) => theme.cardLight} 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(201, 32, 184, 0) 50%, ${({theme}) => theme.cardLight} 100%);
        width: 100%;
         clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
    `
    const toggleTheme = () => {
      setCurrentTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    }

  return (
      <ThemeProvider theme={currentTheme}>
    <Body>
      <Navbar onThemeToggle={toggleTheme} id='navbar'/>
        <Wrapper>
            <About/>
            <Education/>
            <Projects/>
            <Contact/>
        </Wrapper>
    </Body>
      </ThemeProvider>
  );
}

export default App;
