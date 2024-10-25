import AboutMe from "./components/Aboutme";
import Experience from "./components/Experiance";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portofolio";
import Skills from "./components/Skils";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
    </>
  );
}

export default App;
