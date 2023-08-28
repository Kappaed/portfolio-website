import styled from "styled-components";
import Container from "../shared/Container";
import AboutIntroText from "./AboutIntroText";
import AboutSkills from "./AboutSkills";
import StyledHeading from "../shared/StyledHeading";
import SectionHeader from "../shared/SectionHeader";

const FlexWrapper = styled.div`
  display: flex;
  align-items: stretch;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const AboutColumn = styled.div`
  width: 50%;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SkillsHeader = styled(StyledHeading)`
  width: 100%;
  text-align: center;
  @media (max-width: 750px) {
    margin-bottom: 30px;
  }
`;

const About = () => {
  return (
    <Container id="about" data-aos="zoom-in">
      <FlexWrapper>
        <AboutColumn>
          <SectionHeader index="1" width="100%">
            About me
          </SectionHeader>
          <AboutIntroText />
        </AboutColumn>
        <AboutColumn marginLeft>
          <SkillsHeader>Skills</SkillsHeader>
          <AboutSkills
            skills={[
              "Javascript (ES6)",
              "Typescript",
              "ReactJS",
              "Python 3+",
              "Golang",
              "Java",
              // "HTML",
              // "CSS/SASS",
              // "Javascript (ES6)",
              // "ReactJS",
              // "Redux",
              // "Styled-Components",
              // "Git",
            ]}
          />
        </AboutColumn>
      </FlexWrapper>
    </Container>
  );
};

export default About;
