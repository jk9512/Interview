import React from "react";
import WebDevImg from "../../images/webDev.svg";
import EcomwebApp from "../../images/ecomwebapp.svg";
import MobileApp from "../../images/mobileapp.svg";
import UiUx from "../../images/uiux.svg";
import digitalmarketing from "../../images/digitalmarketing.svg";
import webappmaintain from "../../images/webappmaintain.svg";
import "./ExpertArea.css";

const ExpertArea = () => {
  return (
    <div className="container">
      <h4 className="fs-2 fw-bold text-center">Our Area Expertise</h4>
      <div className="py-4 expert-box-main-wrapper">
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={WebDevImg} alt="" className="img-fluid" />
          </div>
          <h5 className="">Web Development</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={EcomwebApp} alt="" className="img-fluid" />
          </div>
          <h5 className="">Web Development</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={MobileApp} alt="" className="img-fluid" />
          </div>
          <h5 className="">Web Development</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={UiUx} alt="" className="img-fluid" />
          </div>
          <h5 className="">Web Development</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={digitalmarketing} alt="" className="img-fluid" />
          </div>
          <h5 className="">Web Development</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={webappmaintain} alt="" className="img-fluid" />
          </div>
          <h5 className="">Web Development</h5>
        </div>
      </div>
    </div>
  );
};

export default ExpertArea;
