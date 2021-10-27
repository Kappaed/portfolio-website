import ProjectTemplate from "./ProjectTemplate";
import ProjectOne from "../../images/project-01.png";
import ProjectDescription from "./ProjectDescription";
import StyledLink from "../shared/StyledLink";
import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";
import { FiGithub } from "react-icons/fi";

const MockEcommerce = () => {
  return (
    <ProjectTemplate
      img={ProjectOne}
      title="React Ecommerce Website"
      data-aos="fade-right"
    >
      <ProjectDescription>
        An E-Commerce web app (without a payment system) that allows users to
        view, search, filter by category and add to cart various products
        fetched from a{" "}
        <StyledLink href="https://fakestoreapi.com/"> Mock API</StyledLink>.
      </ProjectDescription>
      <ProjectTech
        tech={[
          "ReactJS",
          "Axios",
          "React-Router",
          "Redux",
          "Redux-Persist",
          "Styled-Components",
        ]}
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
export default MockEcommerce;
