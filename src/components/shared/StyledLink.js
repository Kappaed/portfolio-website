import styled, { css } from "styled-components";
import HoverEffect from "./HoverEffect";
import { OutboundLink } from "react-ga";

const LinkStyling = css`
  color: ${(props) =>
    props.color ? props.color : "var(--secondary-font-color)"};
  font-size: ${(props) => (props.size ? props.size : "inherit")};
  cursor: pointer;
  position: relative;

  ${HoverEffect};
`;
const StyledLink = styled.a`
  ${LinkStyling};
`;

export const StyledOutboundLink = styled(OutboundLink)`
  ${LinkStyling};
`;

export default StyledLink;
