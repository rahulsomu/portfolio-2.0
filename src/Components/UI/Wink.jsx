import React from "react";
import "./wink.css";

const Wink = () => {
  return (
    <div className="face_outer">
      <div className="face_inner">
        <div className="eyes">
          <div className="left_eye"></div>
          <div className="right_eye"></div>
        </div>
        <div className="mouth"></div>
      </div>
    </div>
  );
};

export default Wink;
