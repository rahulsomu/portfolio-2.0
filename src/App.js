import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Reviews from "./Components/Projects/Reviews/Reviews";
import Resume from "./Components/Resume/Resume";
import Navbar from "./Components/UI/Navbar";
import Wink from "./Components/UI/Wink";

function App() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="App">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
        <Reviews />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <footer>
        <p>Thank you for Visiting!</p>
        <div className="wink2">
          <Wink />
        </div>
        <p className="copyright">&copy;{` Rahul Rana ${year}`}</p>
      </footer>
    </div>
  );
}

export default App;
