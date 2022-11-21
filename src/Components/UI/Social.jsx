import React from "react";
import "./social.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Social = () => {
  return (
    <div className="social">
      <button>
        <a href="https://github.com/rahulsomu" target="_">
          <AiFillGithub />
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/rahulrana1998/" target="_">
          <FaLinkedinIn />
        </a>
      </button>
      <button>
        <a href="https://www.facebook.com/ranarahul1998" target="_">
          <FaFacebookF />
        </a>
      </button>
      {/* <button>
        <a href="" target="_">
          <FaDiscord />
        </a>
      </button> */}
      <button>
        <a href="https://www.instagram.com/rahul.jpg/" target="_">
          <GrInstagram />
        </a>
      </button>
    </div>
  );
};

export default Social;
