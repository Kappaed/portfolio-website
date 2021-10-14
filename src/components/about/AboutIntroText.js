import StyledHeading from "../shared/StyledHeading";
import SecondaryText from "../shared/SecondaryText";
import SectionHeader from "../shared/SectionHeader";
import StyledLink from "../shared/StyledLink";
import styled from "styled-components";

const AboutText = styled.p`
  line-height: 1.5;
  margin-bottom: 20px;
`;

const AboutIntroText = () => {
  return (
    <>
      <SectionHeader>
        <SecondaryText>01. </SecondaryText>
        <div style={{ marginRight: "10px" }} />
        <StyledHeading size="1.8rem">About Me</StyledHeading>
      </SectionHeader>
      <AboutText>
        Hello! My name is Nathan and I enjoy creating rich, interactive
        web-interfaces. My interest is in HTML, CSS and Javascript Frameworks
        such as React.
      </AboutText>
      <AboutText>
        My main focus is on building accessible, responsive websites while
        ensuring great digital experiences.
      </AboutText>
      <AboutText>
        You check out my <StyledLink href="#"> projects here. </StyledLink>
      </AboutText>
    </>
  );
};

export default AboutIntroText;
