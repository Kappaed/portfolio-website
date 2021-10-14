import SectionHeader from "../shared/SectionHeader";
import Container from "../shared/Container";
import styled from "styled-components";
import MockEcommerce from "./MockEcommerce";
import CrmApp from "./CrmApp";
import BusinessDashboard from "./BusinessDashboard";
import LandingProject from "./LandingProject";
const ProjectsContainer = styled(Container)`
  margin: 200px auto;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionHeader index="2" width="80%">
        Some things I've built
      </SectionHeader>
      <MockEcommerce />
      <CrmApp />
      <BusinessDashboard />
      <LandingProject />
    </ProjectsContainer>
  );
};

export default Projects;
