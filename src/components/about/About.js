import styled from "styled-components";
import Container from "../shared/Container";

const AboutContainer = styled(Container)`
  padding: 0 50px;
  display: flex;
`;

const AboutColumn = styled.div`
  width: 50%;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutColumn>
        <p>foo</p>
      </AboutColumn>
      <AboutColumn>
        <p>bar</p>
      </AboutColumn>
    </AboutContainer>
  );
};

export default About;
