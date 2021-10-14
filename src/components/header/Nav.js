import styled from "styled-components";
import NavItem from "./NavItem";
import StyledButton from "../shared/StyledButton";

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  ul:last-child {
    margin-right: 0;
  }
`;
const Nav = () => {
  return (
    <nav>
      <Wrapper>
        <NavItem href="#about" index="1">
          About
        </NavItem>
        <NavItem href="#projects" index="2">
          Projects
        </NavItem>
        <NavItem href="#contact" index="3">
          Contact
        </NavItem>
        <StyledButton as="a" href="#">
          Resume
        </StyledButton>
      </Wrapper>
    </nav>
  );
};

export default Nav;
