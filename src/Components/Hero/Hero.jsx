import React from "react";
import "./hero.css";
import { SiUpwork } from "react-icons/si";
import { MdDownload } from "react-icons/md";

import heroImage from "../../Assets/hero-image.png";
import Social from "../UI/Social";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="content">
        <div className="content_left">
          <div className="social_icons">
            <Social />
          </div>
          <div className="content_info">
            <p>Hi! I'm</p>
            <h1>Rahul Rana</h1>
            <p>Developer,designer and creator of this website.</p>
            <div className="content_info_buttons">
              <button>
                <MdDownload />
                <p>Download Resume</p>
              </button>
              <button>
                <SiUpwork style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="content_right">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
