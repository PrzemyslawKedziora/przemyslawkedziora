import styled from "styled-components";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import * as React from "react";

const ProjectCard = styled.div`
        min-width: 12rem;
        min-height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1vh;
        border-radius: 25px;
        background-color: ${({theme}) => theme.cardLight};
        color: ${({theme}) => theme.textPrimary};
        transition: 0.3s ease-in-out;
        &:hover{
                transform: translateY(-10%);
                transition: 0.3s ease-in-out;
        }
`
const Projects = () => {
    return(
        <>

            <h1>Projects</h1>
                   <Timeline position="right">
                       <TimelineItem>
                           <TimelineSeparator>
                               <TimelineDot></TimelineDot>
                               <TimelineConnector />
                           </TimelineSeparator>
                           <TimelineContent>
                               <ProjectCard >Project</ProjectCard>
                           </TimelineContent>
                       </TimelineItem>
                       <TimelineItem>
                           <TimelineSeparator>
                               <TimelineDot />
                               <TimelineConnector />
                           </TimelineSeparator>
                           <TimelineContent>
                               <ProjectCard >Project</ProjectCard>
                           </TimelineContent>
                       </TimelineItem>
                       <TimelineItem>
                           <TimelineSeparator>
                               <TimelineDot />
                               <TimelineConnector />
                           </TimelineSeparator>
                           <TimelineContent>
                               <ProjectCard >Project</ProjectCard>
                           </TimelineContent>
                       </TimelineItem>
                       <TimelineItem>
                           <TimelineSeparator>
                               <TimelineDot />
                               <TimelineConnector />
                           </TimelineSeparator>
                           <TimelineContent>
                               <ProjectCard >Project</ProjectCard>
                           </TimelineContent>
                       </TimelineItem>
                   </Timeline>
        </>
    )
}
export default Projects;