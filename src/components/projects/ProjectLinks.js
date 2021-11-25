import styled from "styled-components";
import { OutboundLink } from "react-ga";
const Wrapper = styled.div`
  font-size: 1.8rem;
`;

const IconWrapper = styled(OutboundLink)`
  display: inline-block;
  margin-left: ${(props) => (props.reverse ? "0" : "5px")};
  margin-right: ${(props) => (props.reverse ? "5px" : "0")};
  color: var(--tertiary-font-color);
  &:hover {
    color: var(--secondary-font-color);
  }
`;

const ProjectLinks = (props) => {
  return (
    <Wrapper>
      {props.links.map((item, index) => (
        <IconWrapper
          eventLabel={`clicked on Project Link ${item.link}`}
          to={item.link}
          target="_blank"
          key={index}
          reverse={props.reverse}
        >
          {item.icon}
        </IconWrapper>
      ))}
    </Wrapper>
  );
};

export default ProjectLinks;
