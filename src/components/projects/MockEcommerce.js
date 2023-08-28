import ProjectTemplate from "./ProjectTemplate";
import ProjectOne from "../../images/project-01.png";
import ProjectDescription from "./ProjectDescription";
import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const MockEcommerce = () => {
  return (
    <ProjectTemplate
      img={ProjectOne}
      title="Full-Stack Ecommerce Website"
      data-aos="fade-right"
    >
      <ProjectDescription>
        A full-stack E-Commerce web-app with a front-end interface implemented
        in ReactJS, NodeJS+Express backend server and Firebase Database. User
        authentication (JWT with Firebase Auth) and payment system (Stripe API)
        have also been implemented.
        {/* <StyledLink href="https://fakestoreapi.com/"> Mock API</StyledLink>. */}
      </ProjectDescription>
      <ProjectTech
        tech={[
          "ReactJS",
          "NodeJS+Express",
          "Firebase",
          "Stripe API",
          "JSON Web Token",
        ]}
      />
      <ProjectLinks
        links={[
          {
            link: "https://github.com/Kappaed/Stripe-Store-Frontend",
            icon: <FiGithub />,
          },
          {
            link: "https://github.com/Kappaed/Stripe-Store-Backend",
            icon: <FiGithub />,
          },
          {
            link: "https://superlative-crostata-89b75d.netlify.app/",
            icon: <FiExternalLink />,
          },
        ]}
      />
    </ProjectTemplate>
  );
};
export default MockEcommerce;
