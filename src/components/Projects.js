import styled, {ThemeContext} from "styled-components";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import * as React from "react";
import {projects} from "../assets/data";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useContext} from "react";

const ProjectContainer = styled.div`
    width: 90%;
`
const ProjectCard = styled.div`
    text-wrap: normal;
    margin-bottom: 1vh;
    border-radius: 25px;
    padding: 10px 20px;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.textPrimary};
    transition: 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    &:hover{
        transform: translateY(-10%);
        transition: 0.3s ease-in-out;
    }
    .desc{
        color: ${({theme}) => theme.textSecondary};
    }
`

const ProjectCardActions = styled.div`
    display: none;
    transition:backdrop-filter 2s;
    backdrop-filter: blur(0px);
    ${ProjectCard}:hover & {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        position: absolute;
        flex-wrap: wrap;
        width: 95%;
        height: 95%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: backdrop-filter 2s;
        backdrop-filter: blur(5px);
    }
    button{
        background: ${({theme}) => theme.button};
        color: ${({theme}) => theme.background};
        border-radius: 0.75rem;
        width: 8rem;
        height: 2rem;
        transition: 0.3s ease-in-out;
        
        &:hover{
            color: ${({theme}) => theme.textPrimary};
        }
        
    }
`
const Projects = () => {

    const theme = useContext(ThemeContext);
    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 1
    });

    return(
        <>
            <ProjectContainer>
                <h1 id="projects" className="text-center" ref={refTitle}
                    style={{opacity: inViewTitle ? 1 : 0, transition: 'opacity 0.8s ease-out'}}>Projects</h1>
                <Timeline position="alternate"
                          style={{opacity: inViewTitle ? 1 : 0, transition: 'opacity 1s ease-out', transitionDelay: "250ms"}}>
                    {projects.map((project) => (
                        <TimelineItem >
                            <TimelineSeparator>
                                <TimelineDot sx={{
                                    background: "transparent",
                                    border: `1px solid ${theme.textPrimary}`,
                                    color: theme.textPrimary
                                }}>
                                    {<project.appLogoLink/>}
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '20px', px: 2}}>
                                    <ProjectCard>
                                        <div className="title">
                                            {project.name}
                                        </div>
                                        <div className="desc">
                                            {project.description}
                                        </div>
                                        <div className="technologies">
                                            <b>
                                                {"Used technologies: "}
                                            </b>
                                            {project.technologies.map((technology, index) => (
                                                <span>
                                                   {technology}{index !== project.technologies.length - 1 && ", "}
                                               </span>
                                            ))}
                                        </div>
                                        <ProjectCardActions>
                                            <Link to={project.repository} target="_blank">
                                                <button>Repository</button>
                                            </Link>
                                            <Link to={project.demo} target="_blank">
                                            <button>Live Demo</button>
                                            </Link>
                                        </ProjectCardActions>
                                    </ProjectCard>

                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </ProjectContainer>
        </>
    )
}
export default Projects;