import React from "react";
import "./navbar.css";
import { TiHome } from "react-icons/ti";
import { RiUserFill } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { MdDownload } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <button>
        <div className="button_text">Home</div>
        <a href="#hero">
          <TiHome />
          <p>Home</p>
        </a>
      </button>
      <button>
        <div className="button_text">About Me</div>
        <a href="#about">
          <RiUserFill />
          <p>About Me</p>
        </a>
      </button>
      <button>
        <div className="button_text">Projects</div>
        <a href="#projects">
          <IoIosApps />
          <p>Projects</p>
        </a>
      </button>
      <button>
        <div className="button_text">Contact Me</div>
        <a href="#contact">
          <SiGooglemessages />
          <p>Contact</p>
        </a>
      </button>
      <button>
        <div className="button_text">Resume</div>
        <a href="#resume">
          <MdDownload style={{ fontSize: "28px" }} />
          <p>Resume</p>
        </a>
      </button>
    </div>
  );
};

export default Navbar;