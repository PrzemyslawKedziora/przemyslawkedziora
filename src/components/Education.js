import * as React from 'react';
import {useInView} from "react-intersection-observer";
import styled from "styled-components";
import {aboutMe,education} from "../assets/data"

const EducationContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 95vh;
    position: relative;
    padding: 80px 24rem;
    text-align: center;
    font-size: 20px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 0;
`

const EducationCard = styled.div`
    display: flex;
    width: 50%;
    margin-top: 50px;
    background-color: transparent;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid ${({theme}) => theme.primary};
    border-radius: 10px;
    color: ${({theme}) => theme.textPrimary};
    @media (max-width: 960px) {
        padding: 66px 16px;
        width: 90%;
    }

`
const EducationSecondText = styled.div`
    color: ${({theme}) => theme.textSecondary};
    display: flex;
    flex-direction: column;
`
const Img = styled.img`
    width: 20%;
    height: 10%;
    border-radius: 25px;
    margin-right: 10px;
`
const Education = () => {

    const [refTitle, inViewTitle] = useInView({
        triggerOnce: false,
        threshold: 1
    });

    const [refDesc, inViewDesc] = useInView({
        triggerOnce: true,
        threshold: 0.9
    });

    return(
        <>
            <EducationContainer>
                <h1 id='education' ref={refTitle}
                    style={{opacity: inViewTitle ? 1 : 0, transition: 'opacity 0.8s ease-out'}}>
                    Education
                </h1>
                <div ref={refDesc} style={{opacity: inViewDesc ? 1 : 0, transition: 'opacity 0.8s ease-out'}}>
                   <p className="text-center">
                       {aboutMe.educationDesc}
                   </p>
                </div>
                <EducationCard>
                    <Img src={education.img} alt="image"/>
                    <div className="flex flex-col justify-between">
                        <div>
                            {education.university}
                        </div>
                        <EducationSecondText>
                            <p>
                                {education.degree}
                            </p>
                            <p style={{fontSize:"12px"}}>
                                {education.date}
                            </p>
                        </EducationSecondText>
                    </div>
                </EducationCard>
            </EducationContainer>
        </>
    )
}
export default Education;