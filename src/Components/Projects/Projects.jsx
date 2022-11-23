import React from "react";
import "./projects.css";
import { projectData } from "./Reviews/projectData";
import { motion } from "framer-motion";

const Projects = () => {
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
          <p>Some Featured Projects</p>
          <button>View All</button>
        </div>
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

          {/* <motion.div
            className="grid_item"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="details_info">Click to View Details</p>
            <div className="project_image">
              <img
                src="https://images.unsplash.com/photo-1654161975496-065c5d93391c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
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
          </motion.div>
          <motion.div
            className="grid_item"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="details_info">Click to View Details</p>
            <div className="project_image">
              <img
                src="https://images.unsplash.com/photo-1666805949083-b8b8698a347a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
          </motion.div>
          <motion.div
            className="grid_item"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="details_info">Click to View Details</p>
            <div className="project_image">
              <img
                src="https://images.unsplash.com/photo-1661311850567-d2db65efe84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
          </motion.div> */}
        </div>
        <div className="grid_footer">
          <button>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
