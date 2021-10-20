import styled from "styled-components";
import SecondaryText from "../shared/SecondaryText";
import StyledHeading from "../shared/StyledHeading";
import StyledButton from "../shared/StyledButton";
import Container from "../shared/Container";
const Wrapper = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 130px;
  text-align: center;
  margin: 300px auto;
  @media (max-width: 500px) {
    padding: 0 50px;
  }
`;

const StyledText = styled.p`
  margin: 30px 0;
`;
const Action = () => {
  return (
    <Wrapper id="contact">
      <SecondaryText>04. What's next?</SecondaryText>
      <StyledHeading>Get in Touch</StyledHeading>
      <StyledText>
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </StyledText>
      <StyledButton as="a" href="mailto:nathansing.ns@gmail.com">
        Say Hello
      </StyledButton>
    </Wrapper>
  );
};

export default Action;
