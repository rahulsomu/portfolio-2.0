import React from "react";
import "./resume.css";
import resume from "../../Assets/resume.jpg";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="resume_section">
      <motion.div
        className="resume_section_header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>Resume.</p>
      </motion.div>
      <div className="resume_section_content">
        <div className="download_buttons">
          <p>Download Resume</p>
          <button>
            <a
              href="https://drive.google.com/file/d/1adofO7NRcj20A20EfKaUqVigiTXn4_yN/view?usp=sharing"
              target="_"
            >
              {" "}
              <MdDownload />
              Download as Pdf
            </a>
          </button>
          <button>
            <a href={resume} download={`rahul rana resume`}>
              <MdDownload />
              Download as Image
            </a>
          </button>
        </div>
        <motion.div
          className="resume_image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={resume} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
