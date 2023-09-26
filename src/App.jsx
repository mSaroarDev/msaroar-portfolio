import About from "./components/About";
import Arrow from "./components/Arrow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <Arrow />
    </>
  );
};

export default App;
