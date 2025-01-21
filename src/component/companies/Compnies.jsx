import React from "react";
import company1 from "../../images/Company1.png";
import company2 from "../../images/Company2.png";
import company3 from "../../images/Company3.png";
import company4 from "../../images/Company4.png";
import "./Compnies.css";

const Compnies = () => {
  return (
    <div className="container">
      <h4 className="fs-2 fw-bold text-center">Our Area Expertise</h4>
      <div className="py-4 company-box-main-wrapper align-items-center">
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={company1} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={company2} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={company3} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={company4} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compnies;
