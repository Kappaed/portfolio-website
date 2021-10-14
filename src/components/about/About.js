import styled from "styled-components";
import Container from "../shared/Container";
import AboutIntroText from "./AboutIntroText";
import AboutSkills from "./AboutSkills";

const AboutContainer = styled(Container)`
  padding: 0 20px;
  display: flex;
  align-items: stretch;
`;

const AboutColumn = styled.div`
  width: 50%;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutColumn>
        <AboutIntroText />
      </AboutColumn>
      <AboutColumn marginLeft>
        <AboutSkills
          skills={[
            "HTML",
            "CSS/SASS",
            "Javascript (ES6)",
            "ReactJS",
            "Redux",
            "Styled-Components",
            "Git",
          ]}
        />
      </AboutColumn>
    </AboutContainer>
  );
};

export default About;
