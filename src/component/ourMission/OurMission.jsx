import React from "react";
import MissionImg from "../../images/Group 51.svg";
import Mission from "../../images/MISSION.svg";

const OurMission = () => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center py-md-5 py-3">
        <div className="col-md-7 pe-md-5 pe-0 order-md-0 order-1">
          <h3 className="fw-bold fs-2">Our Mission</h3>
          <p>
            We believe in serving quality services which can meet
            customersrequirements. Our vision is to bring out the best in
            people, technology andprocesses with top-notch quality. We build
            customer experience. Our mission is to place a consistent innovation
            to bring about an ultimate crest of triumph as our service.
          </p>
        </div>
        <div className="col-md-5 ">
          <img src={MissionImg} alt="" className="img-fluid" />
        </div>
      </div>
      <img src={Mission} alt="" className="img-fluid" />
    </div>
  );
};

export default OurMission;
