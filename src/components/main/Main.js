import styled from "styled-components";
import Container from "../shared/Container";
import SecondaryText from "../shared/SecondaryText";
import StyledHeading from "../shared/StyledHeading";
import StyledButton from "../shared/StyledButton";
const Wrapper = styled.div`
  width: 100%;
  color: var(--primary-font-color);
  line-height: 2;
  font-size: 1.2rem;
  margin-top: 70px;
  height: calc(100vh);
`;

const StyledText = styled.p`
  width: 50%;
  line-height: 1.3;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 550px) {
    width: 90%;
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;

const MainHeading = styled(StyledHeading)`
  @media (max-width: 800px) {
    font-size: 3.4rem;
    line-height: 1.2;
  }
  @media (max-width: 550px) {
    font-size: 3rem;
  }
  @media (max-width: 350px) {
    font-size: 2.5rem;
  }
`;

const Main = () => {
  return (
    <Wrapper data-aos="fade-right">
      <Container>
        <SecondaryText>Hi, my name is</SecondaryText>
        <MainHeading as="h1" size="4rem">
          Nathan Sing.
        </MainHeading>
        <MainHeading as="h1" size="4rem" color="var(--tertiary-font-color)">
          Front-end is my passion.
        </MainHeading>
        <StyledText>
          I'm a Front End Developer specialised in React who's interested in the
          latest web technologies.{" "}
          <SecondaryText as="span">
            You can check out my projects below!
          </SecondaryText>
        </StyledText>
        <StyledButton as="a" href="#projects">
          Check out my projects
        </StyledButton>
      </Container>
    </Wrapper>
  );
};

export default Main;
