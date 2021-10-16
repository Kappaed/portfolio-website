import styled from "styled-components";

const SideWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  writing-mode: vertical-rl;
  z-index: 10;
  color: var(--tertiary-font-color);
  right: ${(props) => (props.right ? "30px" : "auto")};
  left: ${(props) => (props.left ? "30px" : "auto")};
  font-size: 1rem;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export default SideWrapper;
