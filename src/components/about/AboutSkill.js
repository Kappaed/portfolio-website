import styled from "styled-components";
import HoverEffect from "../shared/HoverEffect";
import { FaCaretRight } from "react-icons/fa";
import SecondaryText from "../shared/SecondaryText";

const Wrapper = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
  font-size: 1.3rem;
  margin: 5px 0;
`;

const HoverWrapper = styled.span`
  position: relative;
  ${HoverEffect};
`;
const AboutSkill = (props) => {
  return (
    <Wrapper>
      <SecondaryText as="span">
        <FaCaretRight />
      </SecondaryText>
      <HoverWrapper>{props.children}</HoverWrapper>
    </Wrapper>
  );
};

export default AboutSkill;
