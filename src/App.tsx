import Background from "./components/shared/Background";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skill from "./pages/Skill";

function App() {
  return (
    <Background>
      <Home />
      <About />
      <Skill />
      <Contact />
    </Background>
  );
}

export default App;
