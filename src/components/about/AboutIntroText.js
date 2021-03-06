import { StyledOutboundLink } from "../shared/StyledLink";
import styled from "styled-components";

const AboutText = styled.p`
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  @media (max-width: 750px) {
    margin: 20px 0 60px 0;
  }
`;

const AboutIntroText = () => {
  return (
    <Wrapper>
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
        You can check out my
        <StyledOutboundLink
          eventLabel="Visited Github"
          target="_blank"
          to="https://github.com/kappaed"
        >
          {" "}
          Github here.
        </StyledOutboundLink>{" "}
      </AboutText>
    </Wrapper>
  );
};

export default AboutIntroText;
