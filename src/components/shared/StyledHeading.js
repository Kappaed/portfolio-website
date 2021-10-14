import styled from "styled-components";

const StyledHeading = styled.h2`
  font-weight: bold;
  font-size: ${(props) => (props.size ? props.size : "2rem")};
  color: ${(props) =>
    props.color ? props.color : "var(--primary-font-color)"};
  line-height: 1.5;
`;

export default StyledHeading;
