import React, { useState } from "react";
import "./contact.css";
import Social from "../UI/Social";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formIndicatorName, setFormIndicatorName] = useState(0);
  const [formIndicatorEmail, setFormIndicatorEmail] = useState(0);
  const [formIndicatorMessage, setFormIndicatorMessage] = useState(0);
  const [validEmail, setValidEmail] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (contactForm.name.length === 0 && formIndicatorName !== 0)
      setFormIndicatorName(formIndicatorName - 33);
  }, [contactForm.name]);
  useEffect(() => {
    if (contactForm.email.length === 0 && formIndicatorEmail !== 0)
      setFormIndicatorEmail(formIndicatorEmail - 33);
  }, [contactForm.email]);
  useEffect(() => {
    if (contactForm.message.length === 0 && formIndicatorMessage !== 0)
      setFormIndicatorMessage(formIndicatorMessage - 33);
  }, [contactForm.message]);

  useEffect(() => {
    console.log(validEmail);
  }, [validEmail]);

  const contactFormHandler = (e) => {
    e.preventDefault();
    console.log(contactForm);
    setContactForm({
      name: "",
      email: "",
      message: "",
    });

    axios
      .post(
        "https://portfolio-backend-74lt.onrender.com/contact",
        contactForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };

  const validateEmail = (email) => {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

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
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => {
                  setContactForm({ ...contactForm, name: e.target.value });
                  if (formIndicatorName <= 33 && contactForm.name.length == 0) {
                    setFormIndicatorName(formIndicatorName + 33);
                  }
                }}
              />
            </div>
            <div className="input_field">
              <p>Email</p>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => {
                  validateEmail(e.target.value);
                  setContactForm({ ...contactForm, email: e.target.value });
                  if (
                    formIndicatorEmail <= 33 &&
                    contactForm.email.length == 0
                  ) {
                    setFormIndicatorEmail(formIndicatorEmail + 33);
                  }
                }}
              />
              {!validEmail && (
                <p style={{ color: "red", fontSize: "10px", marginTop: "5px" }}>
                  Please enter valid Email
                </p>
              )}
            </div>
            <div className="input_field">
              <p>Message</p>
              <textarea
                className="message"
                value={contactForm.message}
                onChange={(e) => {
                  setContactForm({ ...contactForm, message: e.target.value });
                  if (
                    formIndicatorMessage <= 33 &&
                    contactForm.message.length == 0
                  ) {
                    setFormIndicatorMessage(formIndicatorMessage + 33);
                  }
                }}
              />
            </div>
            <div className="form-btn">
              <div className="button_bg">
                <div
                  className="form_indicator"
                  style={{
                    width: `${
                      formIndicatorName +
                      formIndicatorEmail +
                      formIndicatorMessage
                    }%`,
                    background:
                      formIndicatorName +
                        formIndicatorEmail +
                        formIndicatorMessage <=
                      33
                        ? "red"
                        : formIndicatorName +
                            formIndicatorEmail +
                            formIndicatorMessage <=
                          66
                        ? "orange"
                        : formIndicatorName +
                            formIndicatorEmail +
                            formIndicatorMessage <=
                          99
                        ? "green"
                        : "grey",
                  }}
                ></div>
                <button
                  type="submit"
                  disabled={
                    !contactForm.name ||
                    !contactForm.email ||
                    !contactForm.message ||
                    !validEmail
                  }
                  onClick={contactFormHandler}
                >
                  Submit
                </button>
              </div>
            </div>
            {success && (
              <p style={{ textAlign: "center" }}>Message Sent SuccessFully🥳</p>
            )}
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
