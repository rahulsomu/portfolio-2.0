import React from "react";
import Wink from "../UI/Wink";
import "./about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about_section">
      <motion.div
        className="about_section_header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <p>About Me.</p>
      </motion.div>
      <motion.div
        className="about_section_content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="wink"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Wink />
        </motion.div>
        <p>
          Hii! I am <strong>Rahul Rana</strong> .
          <br /> Welcome to my page first of all. I would love to share my
          journey and how things are going right now. I currently live in India,
          a very beautiful country. I have done MCA from Galgotias University,
          Noida.
          <br />{" "}
          <strong>
            I have 2 years of industry experience in frontend development mostly
            in React JS.
          </strong>
          <br />
          In Web development , I master a wide range of technologies from HTML ,
          CSS , JavaScript here and there as well as libraries such as bootstrap
          , tailwind , material UI and much more but mostly React Js , React
          Native , Next Js with all its power. I'm a proficient front-end
          developer and a UI designer. I started my freelancing journey in 2021
          and have delivered several projects with high standards. As an
          individual, I'm always looking for new challenges and researching for
          new advanced techniques is a constant. I'm achievement-oriented and
          like to push the boundaries more and more each time, always trying to
          stay at the fore front of cutting edge technology.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
