import React from "react";
import VisionImg from "../../images/VISION_IMG.svg";
import Visiontext from "../../images/VISIONTEXT.svg";

const Vision = () => {
  return (
    <div className="container pb-md-5 pb-3">
      <div className="d-flex flex-wrap align-items-center pt-md-5 pt-3">
        <div className="col-md-5">
          <img src={VisionImg} alt="" className="img-fluid" />
        </div>
        <div className="col-md-7 ps-md-5 ps-0">
          <h3 className="fw-bold fs-2">Our Vision</h3>
          <p>
            We believe in serving quality services which can meet
            customersrequirements. Our vision is to bring out the best in
            people, technology andprocesses with top-notch quality. We build
            customer experience. Our mission is to place a consistent innovation
            to bring about an ultimate crest of triumph as our service.
          </p>
        </div>
      </div>
      <div className="text-end">
        <img src={Visiontext} alt="" />
      </div>
    </div>
  );
};

export default Vision;
