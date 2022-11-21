import React from "react";
import "./contact.css";
import Social from "../UI/Social";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact_section">
      <motion.div
        className="contact_section_header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <p>Contact Me.</p>
      </motion.div>
      <div className="contact_section_content">
        <div className="form">
          <form action="">
            <div className="input_field">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="input_field">
              <p>Email</p>
              <input type="email" />
            </div>
            <div className="input_field">
              <p>Message</p>
              <textarea className="message" />
            </div>
            <div className="form-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <motion.div
          className="contact_info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="contact_info_wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <div className="contact_details">
              <MdCall className="icon" />
              <p>+918674917664</p>
            </div>
            <div className="contact_details">
              <MdEmail className="icon" />
              <p>
                <a href="mailto:someone@example.com">
                  rana.rahul.1998@gmail.com
                </a>
              </p>
            </div>
            <div className="social">
              <Social />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
