import React from "react";
import "./reviews.css";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className="review_section">
      <p className="review_section_header">Some Client Reviews</p>
      <div className="reviews_container">
        <motion.div
          className="review"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="review_header">
            <div className="initials">RR</div>
            <div className="client_details">
              <p>Rahul Rana</p>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="review_desc">
            <p>
              Rahul worked on my website www.appliceasy.com as a graphic
              designer / front end developer. His skills are outstanding! Very
              good understanding of what I wanted and strong communication
              skills. I can definitely recommend him. Rahul worked on my website
              www.appliceasy.com as a graphic designer / front end developer.
              His skills are outstanding! Very good understanding of what I
              wanted and strong communication skills. I can definitely recommend
              him.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="review"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="review_header">
            <div className="initials">RR</div>
            <div className="client_details">
              <p>Rahul Rana</p>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="review_desc">
            <p>
              Rahul worked on my website www.appliceasy.com as a graphic
              designer / front end developer. His skills are outstanding! Very
              good understanding of what I wanted and strong communication
              skills. I can definitely recommend him. Rahul worked on my website
              www.appliceasy.com as a graphic designer / front end developer.
              His skills are outstanding! Very good understanding of what I
              wanted and strong communication skills. I can definitely recommend
              him.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="review"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="review_header">
            <div className="initials">RR</div>
            <div className="client_details">
              <p>Rahul Rana</p>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="review_desc">
            <p>
              Rahul worked on my website www.appliceasy.com as a graphic
              designer / front end developer. His skills are outstanding! Very
              good understanding of what I wanted and strong communication
              skills. I can definitely recommend him. Rahul worked on my website
              www.appliceasy.com as a graphic designer / front end developer.
              His skills are outstanding! Very good understanding of what I
              wanted and strong communication skills. I can definitely recommend
              him.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="review"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="review_header">
            <div className="initials">RR</div>
            <div className="client_details">
              <p>Rahul Rana</p>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="review_desc">
            <p>
              Rahul worked on my website www.appliceasy.com as a graphic
              designer / front end developer. His skills are outstanding! Very
              good understanding of what I wanted and strong communication
              skills. I can definitely recommend him. Rahul worked on my website
              www.appliceasy.com as a graphic designer / front end developer.
              His skills are outstanding! Very good understanding of what I
              wanted and strong communication skills. I can definitely recommend
              him.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="review"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="review_header">
            <div className="initials">RR</div>
            <div className="client_details">
              <p>Rahul Rana</p>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="review_desc">
            <p>
              Rahul worked on my website www.appliceasy.com as a graphic
              designer / front end developer. His skills are outstanding! Very
              good understanding of what I wanted and strong communication
              skills. I can definitely recommend him. Rahul worked on my website
              www.appliceasy.com as a graphic designer / front end developer.
              His skills are outstanding! Very good understanding of what I
              wanted and strong communication skills. I can definitely recommend
              him.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="review"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="review_header">
            <div className="initials">RR</div>
            <div className="client_details">
              <p>Rahul Rana</p>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="review_desc">
            <p>
              Rahul worked on my website www.appliceasy.com as a graphic
              designer / front end developer. His skills are outstanding! Very
              good understanding of what I wanted and strong communication
              skills. I can definitely recommend him. Rahul worked on my website
              www.appliceasy.com as a graphic designer / front end developer.
              His skills are outstanding! Very good understanding of what I
              wanted and strong communication skills. I can definitely recommend
              him.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
