import React from "react";
import Wink from "../UI/Wink";
import "./about.css";

const About = () => {
  return (
    <div className="about_section">
      <div className="about_section_header">
        <p>About Me.</p>
      </div>
      <div className="about_section_content">
        <div className="wink">
          <Wink />
        </div>
        <p>
          Hii! I am <b>Rahul Rana</b>. Welcome to my page first of all.I would
          love to share my journey and how things are going right now.I
          currently live in India, a very beautiful country. I have done post
          graduation from Galgotias University (MCA (Master of Computer
          Applications)).In Web development for example, I master a wide range
          of technologies, from HTML, CSS, JavaScript here and there as well as
          libraries such as bootstrap,tailwind,material ui and much more but
          mostly React Js,React Native,Next Js with all its power.I'm a
          proficient front-end developer and a UI designer. In the past, I tried
          many work methodologies (always in the pursuit of efficiency) but
          occasionally got caught up in perfectionism, procrastination and
          over-planning. Currently, and being a passionate standardista, the
          work gets done in the best and most efficient way possible, always
          targeting high quality standards. I wrote my first computer program in
          C in the year 2015 and never looked back. Since then, my relationship
          with technology and software development has undergone numerous
          transformations. I started my freelancing journey in 2021 and have
          delivered several projects with high standards. As an individual, I'm
          always looking for new challenges and researching for new advanced
          techniques is a constant. I'm achievement-oriented and like to push
          the boundaries more and more each time, always trying to stay at the
          fore front of cutting edge technology.
        </p>
      </div>
    </div>
  );
};

export default About;
