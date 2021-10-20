import styled from "styled-components";
import AboutSkill from "./AboutSkill";

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
          {props.skills.map((skill, i) => (
            <AboutSkill key={i}>{skill}</AboutSkill>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default AboutSkills;
