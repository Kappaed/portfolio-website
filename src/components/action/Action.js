import styled from "styled-components";
import SecondaryText from "../shared/SecondaryText";
import StyledHeading from "../shared/StyledHeading";
import { OutboundButton } from "../shared/StyledButton";
import Container from "../shared/Container";
import Bubbles from "./Bubbles";
const Wrapper = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 130px;
  text-align: center;
  margin: 300px auto;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 500px) {
    padding: 0 50px;
  }
`;

const StyledText = styled.p`
  margin: 30px 0;
`;
const Action = () => {
  return (
    <div style={{ position: "relative" }} id="contact" data-aos="fade-up">
      <Wrapper>
        <SecondaryText>04. What's next?</SecondaryText>
        <StyledHeading>Get in Touch</StyledHeading>
        <StyledText>
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </StyledText>
        <OutboundButton
          eventLabel="Tried to send email"
          to="mailto:nathansing.ns@gmail.com"
          target="_blank"
        >
          Say Hello
        </OutboundButton>
      </Wrapper>
      <Bubbles />
    </div>
  );
};

export default Action;
