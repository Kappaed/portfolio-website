import styled from "styled-components";
const ProjectDescription = styled.div`
  position: relative;
  width: 105%;
  left: ${(props) => (props.reverse ? "0" : "-5%")};
  right: ${(props) => (props.reverse ? "-5%" : "0")};
  z-index: 2;
  background: var(--darker-primary);
  padding: 25px;
  font-size: 0.85rem;
  line-height: 1.5;
  border-radius: 4px;
  margin-top: 15px;
  @media (max-width: 700px) {
    left: auto;
    right: auto;
    width: 100%;
  }
`;

export default ProjectDescription;
