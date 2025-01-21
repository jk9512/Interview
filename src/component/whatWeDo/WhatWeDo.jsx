import React from "react";
import "./WhatWeDo.css";
import image from "../../images/Group 428.svg";

const WhatWeDo = () => {
  return (
    <div className="container">
      <div className="title-WhatWeDo py-5 text-center">
        <h3 className="m-0">What do we do to remembered for?</h3>
      </div>
      <p className="text-center text-secondary">
        To connect smart actions and execute it with laser-like focus is our
        success mantra. Exploring client’s business for online exposure is an
        ultimately worthy goal for us. We want to be a voice of client’s
        success.
      </p>
      <div className="getinTouchBtn text-center">
        <button className="btn">GET IN TOUCH</button>
      </div>
      <div className="departmentsec py-5 text-center">
        <img src={image} alt="" className="img-fluid" />
        {/* <div className="first">
          <h6 className="fs-3 col-md-4">LET’S HAVE A CUP OF COFFEE:</h6>
          <p>
            Initiate a meeting to understand the requirements and goals of the
            client.
          </p>
        </div>
        <div className="first">
          <h6 className="fs-3 col-md-4">PLAN FOR THE SUCCESS:</h6>
          <p>
            We analyze, design, develop and test the whole project with eagle
            vision.
          </p>
        </div>
        <div className="first">
          <h6 className="fs-3 col-md-4">QUALITY SOLUTIONS:</h6>
          <p>
            For us, the quality solution is what brings clients success &
            exposure together.
          </p>
        </div>
        <div className="first">
          <h6 className="fs-3 col-md-4">YOUR DREAMOUR GOAL:</h6>
          <p>
            We discover & innovate your dream with a look & feel, experience.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default WhatWeDo;
