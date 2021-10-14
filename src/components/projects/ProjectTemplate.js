import styled from "styled-components";
import StyledHeading from "../shared/StyledHeading";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  position: relative;
`;
const ProjectTemplate = (props) => {
  return (
    <Wrapper reverse={props.reverse}>
      <ProjectImage src={props.img} alt="Project Preview" />
      <ProjectInfo alignLeft={props.reverse}>
        <StyledHeading size="1.8rem">{props.title}</StyledHeading>
        {props.children}
      </ProjectInfo>
    </Wrapper>
  );
};

export default ProjectTemplate;
