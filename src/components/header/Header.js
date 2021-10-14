import headerLogo from "../../images/header-logo.png";
import styled from "styled-components";
import Container from "../shared/Container";
import Headroom from "react-headroom";
import Nav from "./Nav";
import { useState } from "react";

const HeaderContainer = styled(Container)`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;

const StyledLogo = styled.img`
  width: 65px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  const [fixed, setFixed] = useState(false);
  return (
    <header>
      <Headroom
        style={{
          zIndex: "10",
          background: fixed
            ? "var(--darker-primary)"
            : "var(--primary-bg-color)",
        }}
        onUnpin={() => setFixed(true)}
        onUnfix={() => setFixed(false)}
      >
        <HeaderContainer>
          <StyledLogo src={headerLogo} alt="website logo" />
          <Nav />
        </HeaderContainer>
      </Headroom>
    </header>
  );
};

export default Header;
