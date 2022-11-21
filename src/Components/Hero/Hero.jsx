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
                <a
                  href="https://drive.google.com/file/d/1IEY44YDCmYCUbZClrn2GI1IyS1wkDHT0/view?usp=share_link"
                  target="_"
                >
                  <MdDownload />
                  <p>Download Resume</p>
                </a>
              </button>
              <button>
                <a
                  href="https://www.upwork.com/freelancers/~011476ab5fba8dd7dc"
                  target="_"
                >
                  <SiUpwork style={{ fontSize: "20px" }} />
                </a>
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
