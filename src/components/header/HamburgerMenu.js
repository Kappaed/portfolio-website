import ReactDOM from "react-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { useEffect } from "react";
import StyledButton from "../shared/StyledButton";
import { FaTimes } from "react-icons/fa";
import HeaderLogo from "../../images/header-logo.png";
const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  font-size: 1.3rem;
  transition: all 0.6s ease-in-out;
  transform: ${(props) =>
    props.visible ? "translateX(0)" : "translateX(500%)"};
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: transparent;
  backdrop-filter: blur(2px);
  z-index: 8;
`;

const Menu = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  max-width: 80%;
  min-width: 300px;
  height: 100%;
  background: var(--darker-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HamburgerButton = styled(StyledButton)`
  position: absolute;
  right: 0.7rem;
  top: 1rem;
  z-index: 10;
  display: flex;
  font-size: 1.8rem;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 0.65rem;
  left: 0.95rem;
  z-index: 10;
  width: 65px;
`;
const HamburgerMenu = (props) => {
  useEffect(() => {
    if (props.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.active]);
  return ReactDOM.createPortal(
    <Wrapper visible={props.active}>
      <LogoWrapper>
        <img src={HeaderLogo} alt="Website Header" />
      </LogoWrapper>
      <HamburgerButton onClick={props.closeButtonHandler}>
        <FaTimes />
      </HamburgerButton>
      <Menu>
        <Nav mobile onMenuItemClick={props.closeButtonHandler} />
      </Menu>
      <Backdrop />
    </Wrapper>,
    document.getElementById("hamburger-root")
  );
};

export default HamburgerMenu;
