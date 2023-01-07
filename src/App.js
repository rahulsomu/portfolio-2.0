import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Reviews from "./Components/Projects/Reviews/Reviews";
import Resume from "./Components/Resume/Resume";
import Navbar from "./Components/UI/Navbar";
import Wink from "./Components/UI/Wink";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  const [splashView, setSplashView] = useState(true);
  let name = localStorage.getItem("Name")?.split(" ")[0];
  useEffect(() => {
    setTimeout(() => {
      setSplashView(false);
    }, 3000);
  }, []);
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="App">
      {splashView ? (
        <motion.div className="splash_screen">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome {name && name}.
          </motion.p>
        </motion.div>
      ) : (
        <>
          <Navbar />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <Reviews />
          <section id="contact">
            <Contact />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <footer>
            <p>Thanks for Visiting!</p>
            <div className="wink2">
              <Wink />
            </div>
            <p className="copyright">&copy;{` Rahul Rana ${year}`}</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
