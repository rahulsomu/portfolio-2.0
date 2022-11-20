import React from "react";
import "./resume.css";
import resume from "../../Assets/resume.jpg";
import { MdDownload } from "react-icons/md";

const Resume = () => {
  return (
    <div className="resume_section">
      <div className="resume_section_header">
        <p>Resume.</p>
      </div>
      <div className="resume_section_content">
        <div className="download_buttons">
          <p>Download Resume</p>
          <button>
            <MdDownload />
            Download as Pdf
          </button>
          <button>
            <MdDownload />
            Download as Image
          </button>
        </div>
        <div className="resume_image">
          <img src={resume} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
