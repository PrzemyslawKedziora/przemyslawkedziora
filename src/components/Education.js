import * as React from 'react';
import {useInView} from "react-intersection-observer";
import styled from "styled-components";

const EducationContainer = styled.div`
    width: 100%;
    height: 92vh;
    text-align: center;
`
const Education = () => {
    const [refTitle, inViewTitle] = useInView({
        triggerOnce: false,
        threshold: 1
    });

    const [refDesc, inViewDesc] = useInView({
        triggerOnce: false,
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
                    Lorem Ipsum
                </div>
            </EducationContainer>
        </>
    )
}
export default Education;