import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className="bg-gray-950 text-2xl">
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}
