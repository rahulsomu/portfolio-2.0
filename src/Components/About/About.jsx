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
          I currently live in Portugal, a peaceful, sunny and beautiful country,
          where my passion for technology begun at the tender age of 11.Also
          lived and worked in the UK for quite a number of years, where I
          graduated in the London Guildhall University (MSc (Master of Science
          (Computer Science))).I'm multi-disciplinary, which means I wear many
          hats. In software development for example, I master a wide range of
          technologies, from HTML, CSS, JavaScript, NodeJS and PHP/MySQL here
          and there, but mostly .NET C# (MVC, Web API, Core) + MSSQL with all
          its power. I'm a proficient full-stack web developer and a Windows
          applications developer, some applications are available here in my
          website. In the past, I tried many work methodologies (always in the
          pursuit of efficiency) but occasionally got caught up in
          perfectionism, procrastination and over-planning (analysis paralysis
          and premature optimization was another problem). Currently, and being
          a passionate standardista, the work gets done in the best and most
          efficient way possible, always targeting high quality standards. I
          wrote my first computer program in BASIC on a ZX Spectrum back in
          1986. Soon after, I was contributing code and articles for the
          national weekly newspaper about tech and programming. Since then, my
          relationship with technology and software development has undergone
          numerous transformations. As an individual, I'm always looking for new
          challenges and researching for new advanced techniques is a constant.
          I'm achievement-oriented and like to push the boundaries more and more
          each time, always trying to stay at the fore front of cutting edge
          technology.
        </p>
      </div>
    </div>
  );
};

export default About;
