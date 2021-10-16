import styled from "styled-components";
import SecondaryText from "./SecondaryText";
import StyledHeading from "./StyledHeading";

const Divider = styled.div`
  width: 50%;
  height: 1px;
  display: block;
  max-width: 100%;
  margin-right: auto;
  /* margin-left: 20px; */
  background: var(--tertiary-font-color);
`;

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  @media (max-width: 650px) {
    width: 95%;
  }
`;

const SectionHeading = styled(StyledHeading)`
  white-space: nowrap;
`;

const SectionHeader = (props) => {
  return (
    <Wrapper width={props.width}>
      <SecondaryText> {`0${props.index}.`} </SecondaryText>
      <div style={{ marginRight: "10px" }} />
      <SectionHeading size="1.8rem">{props.children}</SectionHeading>
      <div style={{ marginRight: "10px" }} />
      <Divider />
    </Wrapper>
  );
};

export default SectionHeader;
