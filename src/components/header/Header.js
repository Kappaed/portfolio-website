import headerLogo from "../../images/header-logo.png";
import styled from "styled-components";
import Container from "../shared/Container";
import Nav from "./Nav";

const HeaderContainer = styled(Container)`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;

const StyledLogo = styled.img`
  width: 100px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <StyledLogo src={headerLogo} alt="website logo" />
        <Nav />
      </HeaderContainer>
    </header>
  );
};

export default Header;
