import styled from "styled-components";
import SecondaryText from "../shared/SecondaryText";
const Wrapper = styled.div`
  width: 40%;
  text-align: ${(props) => (props.alignLeft ? "left" : "right")};
  font-size: 1.1rem;
`;
const ProjectInfo = (props) => {
  return (
    <Wrapper alignLeft={props.alignLeft}>
      <SecondaryText>Featured Project</SecondaryText>
      {props.children}
    </Wrapper>
  );
};

export default ProjectInfo;
