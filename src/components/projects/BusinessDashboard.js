import ProjectTemplate from "./ProjectTemplate";
import ProjectThree from "../../images/project-03.png";
import ProjectDescription from "./ProjectDescription";
import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";
import { FiGithub } from "react-icons/fi";

const BusinessDashboard = () => {
  return (
    <ProjectTemplate
      img={ProjectThree}
      title="Business Dashboard"
      data-aos="fade-right"
    >
      <ProjectDescription>
        A beautiful, responsive business dashboard with dummy summary data
        rendered with React Charts as well as basic descriptive statistics.
      </ProjectDescription>
      <ProjectTech
        tech={["ReactJS", "Styled-Components", "React-ChartsJs-2"]}
      />
      <ProjectLinks
        links={[
          {
            link: "https://github.com/Kappaed/mock-dashboard",
            icon: <FiGithub />,
          },
        ]}
      />
    </ProjectTemplate>
  );
};

export default BusinessDashboard;
