import styled from "styled-components";
const Divider = styled.div`
  /* width: 60%; */
  height: 1px;
  display: block;
  width: 250px;
  max-width: 100%;
  margin: 0 auto;
  /* margin-left: 20px; */
  background: var(--tertiary-font-color);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.7rem;
`;
const SectionHeader = (props) => {
  return (
    <Wrapper>
      {props.children}
      <Divider />
    </Wrapper>
  );
};

export default SectionHeader;
