import ProjectTemplate from "./ProjectTemplate";
import ProjectTwo from "../../images/project-02.png";
import ProjectDescription from "./ProjectDescription";
import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const CrmApp = () => {
  return (
    <ProjectTemplate
      img={ProjectTwo}
      title="CRM Web App"
      reverse
      data-aos="fade-left"
    >
      <ProjectDescription reverse>
        A full-stack, responsive Private CRM web app built exclusively for a
        client who required a CRUD-like system to add personal contacts with
        detailed information.
      </ProjectDescription>
      <ProjectTech
        tech={[
          "ReactJS",
          "Axios",
          "Styled-Components",
          "React-Router",
          "React-Table",
          "React-Hook-Form",
        ]}
      />
      <ProjectLinks
        reverse
        links={[
          {
            link: "https://github.com/Hansen11111/TeamLazyEvaluators-COMP30022",
            icon: <FiGithub />,
          },
          {
            link: "http://leonsterling.com:3000/",
            icon: <FiExternalLink />,
          },
        ]}
      />
    </ProjectTemplate>
  );
};
export default CrmApp;
