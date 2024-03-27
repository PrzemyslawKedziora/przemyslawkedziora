import {aboutMe} from "../../assets/data";
import {
    Img,
    PersonContainer,
    PersonInnerContainer,
    PersonLeftDataContainer,
    PersonRightDataContainer,
    PersonCVButton,
    Span,
    SubTitle,
    TextLoop,
    Title
} from "./AboutSectionStyle";
import l6d from "../../assets/l6d.jpg";
import Typewriter from 'typewriter-effect';

const About = () => {
    return(
        <>
            <div id='about' className="w-full"
            >
                <PersonContainer>
                    <PersonInnerContainer>
                        <PersonLeftDataContainer>
                            <Title>Hi, I am
                                <br/>
                                {aboutMe.name}
                            </Title>
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: aboutMe.roles,
                                            autoStart: true,
                                            loop: true
                                        }}/>
                                </Span>
                            </TextLoop>
                            <SubTitle>{aboutMe.description}</SubTitle>
                            <PersonCVButton >
                                <a target="_blank"
                                    href="https://drive.google.com/file/d/1bqu9xMblkLfc_HsM8NENUcK-S3vXV6HX/view?usp=sharing">
                                    Check CV
                                </a>
                                </PersonCVButton>
                        </PersonLeftDataContainer>
                        <PersonRightDataContainer>
                            <Img src={l6d} alt='Profile Picture'/>
                        </PersonRightDataContainer>
                    </PersonInnerContainer>
                </PersonContainer>
            </div>
        </>
    )

}
export default About;