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
            <a
              href="https://drive.google.com/file/d/1IEY44YDCmYCUbZClrn2GI1IyS1wkDHT0/view?usp=share_link"
              target="_"
            >
              {" "}
              <MdDownload />
              Download as Pdf
            </a>
          </button>
          <button>
            <a href={resume} download={`rahul's resume`}>
              <MdDownload />
              Download as Image
            </a>
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
