import headerLogo from "../../images/header-logo.png";
import styled from "styled-components";
import Container from "../shared/Container";
import Headroom from "react-headroom";
import Nav from "./Nav";
import { useState } from "react";
import StyledButton from "../shared/StyledButton";
import { FaBars } from "react-icons/fa";

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 10px 15px;
  position: relative;
`;

const StyledLogo = styled.img`
  width: 65px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const HamburgerButton = styled(StyledButton)`
  display: none;
  font-size: 1.8rem;
  @media (max-width: 750px) {
    display: flex;
  }
`;

const Header = (props) => {
  const [isPosFixed, setIsPosFixed] = useState(false);
  return (
    <header>
      <Headroom
        style={{
          zIndex: "10",
          maxWidth: "100%",
          background: isPosFixed
            ? "var(--darker-primary)"
            : "var(--primary-bg-color)",
        }}
        onUnpin={() => setIsPosFixed(true)}
        onUnfix={() => setIsPosFixed(false)}
      >
        <HeaderContainer>
          <StyledLogo src={headerLogo} alt="website logo" />
          <Nav />
          <HamburgerButton onClick={props.openMenuHandler}>
            <FaBars />
          </HamburgerButton>
        </HeaderContainer>
      </Headroom>
    </header>
  );
};

export default Header;
