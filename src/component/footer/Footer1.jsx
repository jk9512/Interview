import React from "react";
import Logo from "../../images/logo.svg";
import FaceBook from "../../images/fb.svg";
import Twitter from "../../images/twwiter.svg";
import Linkedin from "../../images/linkedin.svg";
import footerImg from "../../images/footer-img.svg";
import rightArrow from "../../images/rightArrow.svg";
import "./footer.css";

const Footer1 = () => {
  return (
    <div className="footer-main-sec">
      <div className="container d-flex flex-wrap">
        <div className="col-md-3 col-12 mb-md-0 mb-3 pe-md-4">
          <img src={Logo} alt="" className="img-fluid mb-3" />
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <ul className="d-flex gap-3 align-items-center">
            <li>
              <a href="#!">
                <img src={FaceBook} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={Twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={Linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-12 mb-md-0 mb-3">
          <h5>Quick Links</h5>
          <ul>
            <li className="text-secondary pb-2">Web Development</li>
            <li className="text-secondary pb-2">CMS & Commerce</li>
            <li className="text-secondary pb-2">Mobile App Develoment</li>
            <li className="text-secondary pb-2">Digital marketing</li>
            <li className="text-secondary pb-2">UI/UX Design</li>
          </ul>
        </div>
        <div className="col-md-3 col-12 mb-md-0 mb-3">
          <h5>Comapny</h5>
          <ul>
            <li className="text-secondary pb-2">Privacy Policy</li>
            <li className="text-secondary pb-2">Tearms of Services</li>
            <li className="text-secondary pb-2">Legal Info</li>
            <li className="text-secondary pb-2">Knowledge Base</li>
            <li className="text-secondary pb-2">Contact us</li>
          </ul>
        </div>
        <div className="col-md-3 col-12 mb-md-0 mb-3">
          <h5>Subscribe Our Newsletter</h5>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>
          <div className="position-relative subscription-btn">
            <input type="text" className="w-100" />
            <button type="button" className="position-absolute">
              <img src={rightArrow} alt="rightArrow" className="img-fluid" />
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="d-flex flex-wrap justify-content-between align-items-end container">
          <img src={footerImg} alt="" className="img-fluid" />
          <p>2019 All right reserved by Tech Erudite </p>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
