import SectionHeader from "../shared/SectionHeader";
import Container from "../shared/Container";
import styled from "styled-components";
import MockEcommerce from "./MockEcommerce";
import Dashboard from "./Dashboard";
import MazeGame from "./MazeGame";
const ProjectsContainer = styled(Container)`
  margin: 200px auto;
  overflow: hidden;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionHeader index="2" width="80%">
        Some things I've built
      </SectionHeader>
      <MockEcommerce />
      <MazeGame />
      <Dashboard />
    </ProjectsContainer>
  );
};

export default Projects;
