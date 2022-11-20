import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects_section">
      <div className="projects_section_header">
        <p>Projects.</p>
      </div>
      <div className="projects_section_content">
        <div className="content_header">
          <p>Some Featured Projects</p>
          <button>View All</button>
        </div>
        <div className="projects_grid">
          <div className="grid_item">
            <div className="project_image">
              <img
                src="https://images.unsplash.com/photo-1635791668686-d7fc87fec783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                srcset=""
              />
            </div>
            <div className="project_info">
              <div>
                <div className="project_name">
                  <p>Amazon Clone</p>
                </div>
                <div className="project_desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque aenean
                    orci in sagittis suspendisse. Facilisis eu tellus bibendum
                    tempor vestibulum malesuada arcu.{" "}
                  </p>
                </div>
              </div>

              <div className="preview_button">
                <button>Preview</button>
              </div>
            </div>
          </div>
          <div className="grid_item">a</div>
          <div className="grid_item">a</div>
          <div className="grid_item">a</div>
        </div>
        <div className="grid_footer">
          <button>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
