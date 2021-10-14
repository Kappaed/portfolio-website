import ProjectTemplate from "./ProjectTemplate";
import ProjectFour from "../../images/project-04.png";
import ProjectDescription from "./ProjectDescription";
import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";
import { FiGithub } from "react-icons/fi";

const LandingProject = () => {
  return (
    <ProjectTemplate img={ProjectFour} title="Landing Page" reverse>
      <ProjectDescription reverse>
        An aesthetically pleasing, responsive landing page built using HTMl5,
        SASS, and Vanilla Javascript.
      </ProjectDescription>
      <ProjectTech tech={["HTMl5", "Node-SASS", "Javascript"]} />
      <ProjectLinks
        reverse
        links={[
          {
            link: "https://github.com/Kappaed/Landing-Page",
            icon: <FiGithub />,
          },
        ]}
      />
    </ProjectTemplate>
  );
};

export default LandingProject;
