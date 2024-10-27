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
    <section className="bg-slate-800">
      <>
        <Navbar />
        <Jumbotron />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Experience />
        <div className="pt-5">
          <BackgroundGradient />
          <Form />
          <Footer />
        </div>
      </>
    </section>
  );
}

export default App;
