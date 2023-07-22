import styled, { css } from "styled-components";
import { OutboundLink } from "react-ga";

const ButtonStyling = css`
  outline: none;
  cursor: pointer;
  border: 1px solid var(--secondary-font-color);
  background: transparent;
  font-size: ${(props) => (props.size ? props.size : "inherit")};
  padding: 12px 16px;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: var(--secondary-font-color);
  border-radius: 8px;
  &:hover {
    background: var(--bg-tint);
  }
  ${(props) => props.$hamburger && "font-size: 2rem"};
  ${(props) => props.$hamburger && "margin-top: 30px"};
`;

const StyledButton = styled.button`
  ${ButtonStyling};
`;

export const OutboundButton = styled(OutboundLink)`
  ${ButtonStyling};
`;

export default StyledButton;
