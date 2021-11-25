import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Action from "./components/action/Action";
import EmailElement from "./components/side-elements/EmailElement";
import IconsElement from "./components/side-elements/IconsElement";
import HamburgerMenu from "./components/header/HamburgerMenu";
import ReactGA from "react-ga";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const closeButtonHandler = () => {
    setHamburgerActive(false);
  };

  const openButtonHandler = () => {
    setHamburgerActive(true);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    ReactGA.initialize("G-TL5STESQRK");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <HamburgerMenu
        active={hamburgerActive}
        closeButtonHandler={closeButtonHandler}
      />
      <Header openMenuHandler={openButtonHandler} />
      <Main />
      <About />
      <Projects />
      <Action />
      <EmailElement />
      <IconsElement />
    </>
  );
}

export default App;
