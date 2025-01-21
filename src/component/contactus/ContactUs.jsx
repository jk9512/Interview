import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container py-md-5 py-3">
      <div className="text-center">
        <p className="text-secondary mb-2">GET IN TOUCH</p>
        <h4>Contact Us</h4>
      </div>
      <form>
        <div className="d-flex flex-wrap mb-md-4">
          <div className="col-md-6 col-12 pe-md-3 pb-md-0 pb-3">
            <input type="text" className="form-control" placeholder="Name*" />
          </div>
          <div className="col-md-6 col-12 pb-md-0 pb-3">
            <input type="email" className="form-control" placeholder="Email*" />
          </div>
        </div>
        <div className="mb-4">
          <input type="email" className="form-control" placeholder="Subject*" />
        </div>
        <div className="mb-4">
          <textarea class="form-control" placeholder="Your Message*"></textarea>
        </div>

        <div className="text-center">
          <button type="button" className="btn btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
