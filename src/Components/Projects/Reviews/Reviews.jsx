import React from "react";
import "./reviews.css";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import data from "../../data";

const Reviews = () => {
  return (
    <div className="review_section">
      <p className="review_section_header">Some Client Reviews</p>
      <div className="reviews_container">
        {data.client_reviews?.map((review) => {
          return (
            <motion.div
              className="review"
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="review_header">
                <div className="initials">
                  <img
                    src={review.image_url}
                    alt="client image"
                    height="100%"
                    width="100%"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="client_details">
                  <p>{review.client_name}</p>
                  <div className="rating">
                    {[...Array(parseInt(review.rating))].map((element) => (
                      <AiFillStar />
                    ))}
                  </div>
                </div>
              </div>
              <div className="review_desc">
                <p>{`" ${review.feedback} "`}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
