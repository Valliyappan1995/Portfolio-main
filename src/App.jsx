import "./App.css";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import Project from "./Pages/Project/Project";
import Skill from "./Pages/Skill/Skill";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
