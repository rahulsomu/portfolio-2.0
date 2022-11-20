import React from "react";
import "./contact.css";
import Social from "../UI/Social";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact_section">
      <div className="contact_section_header">
        <p>Contact Me.</p>
      </div>
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
        <div className="contact_info">
          <div className="contact_info_wrapper">
            <div className="contact_details">
              <MdCall className="icon" />
              <p>+918674917664</p>
            </div>
            <div className="contact_details">
              <MdEmail className="icon" />
              <p>rana.rahul.1998@gmail.com</p>
            </div>
            <div className="social">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
