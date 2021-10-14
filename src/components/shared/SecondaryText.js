import styled from "styled-components";

const SecondaryText = styled.p`
  color: ${(props) =>
    props.color ? props.color : "var(--secondary-font-color)"};
  font-size: ${(props) => (props.size ? props.size : "inherit")};
  font-family: var(--font-secondary);
`;

export default SecondaryText;
