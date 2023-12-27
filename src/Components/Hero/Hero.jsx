import React from "react";
import "./hero.css";
import { SiUpwork } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

import heroImage from "../../Assets/hero-image.png";
import Social from "../UI/Social";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="content">
        <div className="content_left">
          <motion.div
            className="social_icons"
            initial={{ opacity: 0, y: -600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Social />
          </motion.div>
          <div
            className="content_info"
            initial={{ opacity: 0, x: -600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi! I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Rahul Rana
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Developer,designer and creator of this website.
            </motion.p>
            <motion.div
              className="content_info_buttons"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button>
                <a
                  href="https://drive.google.com/file/d/1adofO7NRcj20A20EfKaUqVigiTXn4_yN/view?usp=sharing"
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
            </motion.div>
          </div>
        </div>
        <div className="content_right">
          <motion.img
            src={heroImage}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
