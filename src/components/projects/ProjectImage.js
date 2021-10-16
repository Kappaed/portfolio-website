import styled from "styled-components";
const ImgWrapper = styled.div`
  position: relative;
  width: 60%;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 372px;
    background: rgb(219, 112, 147, 0.1);
    border-radius: 5px;
    opacity: 1;
    transition: all 0.2s ease-in;
  }
  &:hover:after {
    opacity: 0;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const StyledImage = styled.img`
  border-radius: 5px;
  height: 372px;
`;
const ProjectImage = (props) => {
  return (
    <ImgWrapper>
      <StyledImage {...props} />
    </ImgWrapper>
  );
};

export default ProjectImage;
