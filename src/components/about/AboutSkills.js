import styled from "styled-components";
import AboutSkill from "./AboutSkill";
import StyledHeading from "../shared/StyledHeading";

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutSkills = (props) => {
  return (
    <>
      <Wrapper>
        <div>
          {props.skills.map((skill) => (
            <AboutSkill>{skill}</AboutSkill>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default AboutSkills;
