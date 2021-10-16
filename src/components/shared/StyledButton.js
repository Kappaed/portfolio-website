import styled from "styled-components";

const StyledButton = styled.button`
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
  ${(props) => props.hamburger && "font-size: 2rem"};
  ${(props) => props.hamburger && "margin-top: 30px"};
`;

export default StyledButton;
