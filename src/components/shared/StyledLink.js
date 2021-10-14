import styled from "styled-components";
import HoverEffect from "./HoverEffect";

const StyledLink = styled.a`
  color: ${(props) =>
    props.color ? props.color : "var(--secondary-font-color)"};
  font-size: ${(props) => (props.size ? props.size : "inherit")};
  cursor: pointer;
  position: relative;

  ${HoverEffect};
`;

export default StyledLink;
