import React from "react";
import Project from "../../images/project.svg";
import Client from "../../images/client.svg";
import Coffee from "../../images/coffee.svg";
import RetantionRate from "../../images/retantionRate.svg";
import "./CompanyDetail.css";

const CompanyDetail = () => {
  return (
    <div className="container">
      <h4 className="fs-2 fw-bold text-center">Our Area Expertise</h4>
      <div className="py-4 box-main-wrapper">
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={Project} alt="" className="img-fluid" />
          </div>
          <h6 className="fs-1">90+</h6>
          <h5 className="">Projects</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={Client} alt="" className="img-fluid" />
          </div>
          <h6 className="fs-1">85+</h6>
          <h5 className="">Clients</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={Coffee} alt="" className="img-fluid" />
          </div>
          <h6 className="fs-1">300+</h6>
          <h5 className="">Coffee</h5>
        </div>
        <div className="box-wrapper text-center">
          <div className="uppper-img mb-4">
            <img src={RetantionRate} alt="" className="img-fluid" />
          </div>
          <h6 className="fs-1">93%</h6>
          <h5 className="">Retention Rate</h5>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
