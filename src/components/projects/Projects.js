import SectionHeader from "../shared/SectionHeader";
import Container from "../shared/Container";
import SecondaryText from "../shared/SecondaryText";
import styled from "styled-components";

const ProjectsContainer = styled(Container)`
  margin: 200px auto;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionHeader index="2" width="80%">
        Some things I've built
      </SectionHeader>
    </ProjectsContainer>
  );
};

export default Projects;
