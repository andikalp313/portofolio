import AboutMe from "./components/Aboutme";
import Experience from "./components/Experiance";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portofolio";
import Skills from "./components/Skils";
import { BackgroundGradient } from "./components/ui/background-gradient";

function App() {
  return (
    <section className="">
      <>
        <Navbar />
        <Jumbotron />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Experience />
        <Form />
        <Footer />
        <BackgroundGradient />
      </>
    </section>
  );
}

export default App;
