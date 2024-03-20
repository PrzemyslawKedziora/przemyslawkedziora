import styled from "styled-components";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import * as React from "react";
import {projects} from "../assets/data";
import {Link} from "react-router-dom";

const ProjectContainer = styled.div`
    height: 100vh;
`
const ProjectCard = styled.div`
    width: 30rem;
    height: 8rem;
    text-wrap: normal;
    margin-bottom: 1vh;
    border-radius: 25px;
    padding-left: 20px;
    padding-top: 10px;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.textPrimary};
    transition: 0.3s ease-in-out;
    &:hover{
        transform: translateY(-10%);
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }
    .desc{
        color: ${({theme}) => theme.textSecondary};
    }
`
const Projects = () => {
    return(
        <>
            <ProjectContainer>
                <h1 id="projects" className="text-center">Projects</h1>
                <Timeline className="flex items-start">
                    {projects.map((project) => (
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot style={{
                                    background: "transparent",
                                    border: "1px solid white"
                                }}>
                                    {<project.appLogoLink/>}
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '20px', px: 2}}>
                                <Link to={project.link} target="_blank">
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
                                    </ProjectCard>
                                </Link>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </ProjectContainer>
        </>
    )
}
export default Projects;