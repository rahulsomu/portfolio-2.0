import React, { useState } from "react";
import "./projects.css";
import { projectData } from "./projectData";
import { motion } from "framer-motion";

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="projects_section">
      <motion.div
        className="projects_section_header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>Projects.</p>
      </motion.div>
      <div className="projects_section_content">
        <div className="content_header">
          <p>{viewAll ? "All Projects" : "Some Featured Projects"}</p>
          <button onClick={() => setViewAll(!viewAll)}>
            {!viewAll ? "View All" : "View Less"}
          </button>
        </div>

        {!viewAll ? (
          <div className="projects_grid">
            {projectData
              .filter((item) => item.featured === true)
              .map((project) => {
                return (
                  <motion.div
                    key={project.id}
                    className="grid_item"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="details_info">Click to View Details</p>
                    <div className="project_image">
                      <img src={project.image} alt="project" srcset="" />
                    </div>
                    <div className="project_info">
                      <div>
                        <div className="project_name">
                          <p>{project.name}</p>
                        </div>
                        <div className="project_desc">
                          <p>{project.description}</p>
                        </div>
                        <div className="tags_container">
                          {project.tags.map((tag) => (
                            <div className="tag">
                              <p>{tag}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="preview_button">
                        <button>
                          <a href={project.link} target="_">
                            Visit
                          </a>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        ) : (
          <div className="projects_grid_small">
            {projectData.map((project) => {
              return (
                <motion.div
                  key={project.id}
                  className="grid_item_small"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="details_info">Click to View Details</p>
                  <div className="project_image">
                    <img src={project.image} alt="project" srcset="" />
                  </div>
                  <div className="project_info_small">
                    <div>
                      <div className="project_name_small">
                        <p>{project.name}</p>
                      </div>
                      <div className="project_desc_small">
                        <p>{project.description}</p>
                      </div>
                      <div className="tags_container_small">
                        {project.tags.map((tag) => (
                          <div className="tag">
                            <p>{tag}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="preview_button_small">
                      <button>
                        <a href={project.link} target="_">
                          Visit
                        </a>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* <div className="grid_footer">
          <button onClick={() => setViewAll(!viewAll)}>
            <a href="#allProjects">{!viewAll ? "View All" : "View Less"}</a>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
