import styled, { css } from "styled-components";
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
  @media (max-width: 750px) {
    display: none;
  }
  ${(props) => props.mobile && MobileCSS};
`;

const MobileCSS = css`
  flex-direction: column;
  width: 100%;
  @media (max-width: 750px) {
    display: flex;
  }
`;

const Nav = (props) => {
  return (
    <Wrapper mobile={props.mobile}>
      <NavItem
        href="#about"
        index="1"
        mobile={props.mobile}
        NavItemClick={props.onMenuItemClick}
      >
        About
      </NavItem>
      <NavItem
        href="#projects"
        index="2"
        mobile={props.mobile}
        NavItemClick={props.onMenuItemClick}
      >
        Projects
      </NavItem>
      <NavItem
        href="#contact"
        index="3"
        mobile={props.mobile}
        NavItemClick={props.onMenuItemClick}
      >
        Contact
      </NavItem>
      <StyledButton
        as="a"
        href="#"
        hamburger={props.mobile}
        NavItemClick={props.onMenuItemClick}
      >
        Resume
      </StyledButton>
    </Wrapper>
  );
};

export default Nav;
