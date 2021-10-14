import styled from "styled-components";
import Container from "../shared/Container";
import AboutIntroText from "./AboutIntroText";
import AboutSkills from "./AboutSkills";
import StyledHeading from "../shared/StyledHeading";
import SectionHeader from "../shared/SectionHeader";

const FlexWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

const AboutColumn = styled.div`
  width: 50%;
`;

const SkillsHeader = styled(StyledHeading)`
  width: 50%;
  text-align: center;
`;

const About = () => {
  return (
    <Container>
      <FlexWrapper>
        <SectionHeader index="1">About me</SectionHeader>
        <SkillsHeader>Skills</SkillsHeader>
      </FlexWrapper>
      <FlexWrapper>
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
      </FlexWrapper>
    </Container>
  );
};

export default About;
