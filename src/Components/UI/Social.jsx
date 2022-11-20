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
        <a href="">
          <AiFillGithub />
        </a>
      </button>
      <button>
        <a href="">
          <FaLinkedinIn />
        </a>
      </button>
      <button>
        <a href="">
          <FaFacebookF />
        </a>
      </button>
      <button>
        <a href="">
          <FaDiscord />
        </a>
      </button>
      <button>
        <a href="">
          <GrInstagram />
        </a>
      </button>
    </div>
  );
};

export default Social;
