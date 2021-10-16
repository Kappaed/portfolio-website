import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Action from "./components/action/Action";
import EmailElement from "./components/side-elements/EmailElement";
import IconsElement from "./components/side-elements/IconsElement";

function App() {
  return (
    <>
      <Header />
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
