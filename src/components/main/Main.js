import styled from "styled-components";
import Container from "../shared/Container";
import SecondaryText from "../shared/SecondaryText";
import StyledHeading from "../shared/StyledHeading";
import StyledButton from "../shared/StyledButton";
import StyledLink from "../shared/StyledLink";

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
`;

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <SecondaryText>Hi, my name is</SecondaryText>
        <StyledHeading as="h1" size="4rem">
          Nathan Sing.
        </StyledHeading>
        <StyledHeading as="h1" size="4rem" color="var(--tertiary-font-color)">
          Front-end is my passion.
        </StyledHeading>
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
