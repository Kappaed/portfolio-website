import styled from "styled-components";
import SecondaryText from "../shared/SecondaryText";

const Item = styled(SecondaryText)`
  display: inline-block;
  margin: 10px;
  font-size: 0.9rem;
  color: black;
`;

const Wrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`;
const ProjectTech = (props) => {
  return (
    <Wrapper>
      {props.tech.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </Wrapper>
  );
};

export default ProjectTech;
