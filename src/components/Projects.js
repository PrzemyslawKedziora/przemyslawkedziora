import styled from "styled-components";

const ProjectCard = styled.div`
        width: 12rem;
        height: 8rem;
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

const ProjectsContainer = styled.div`
`

const Projects = () => {
    return(
        <>
            <h1>Projects</h1>
           <ProjectsContainer id='projects' className="grid grid-cols-2 grid-rows-2 gap-4">
                   <ProjectCard >Project</ProjectCard>
                   <ProjectCard >Project</ProjectCard>
                   <ProjectCard >Project</ProjectCard>
                   <ProjectCard >Project</ProjectCard>
           </ProjectsContainer>
        </>
    )
}
export default Projects;