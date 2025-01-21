import React from "react";
import "./ClientDetail.css";
import testimonialimage from "../../images/testimonialImg.png";

const ClientDetail = () => {
  return (
    <div className="container">
      <div className="title-clientDetail py-5 text-center">
        <h3 className="m-0">What do we do to remembered for?</h3>
      </div>
      <p className="text-center text-secondary">
        Some valuable words from our loving and ever growing customers.
      </p>
      <p className="text-center text-secondary">
        For my react native applications, Tejash and his team has provided me
        very professional and captivative app. They worked dedicatedly and keep
        me updated with project updates. I think that is the best support from
        the team for me. Thank you for the best application.
      </p>

      <swiper-container class="mySwiper" navigation="true">
        <swiper-slide>
          <div className="d-block">
            <img
              src={testimonialimage}
              alt="testimonialimage"
              className="img-fluid testimonialimage"
            />
            <h6 className="fs-4 mt-3 clientName">User 1</h6>
            <p className="fs-6">CEO</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="d-block">
            <img
              src={testimonialimage}
              alt="testimonialimage"
              className="img-fluid testimonialimage"
            />
            <h6 className="fs-4 mt-3 clientName">User 2</h6>
            <p className="fs-6">CFO</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="d-block">
            <img
              src={testimonialimage}
              alt="testimonialimage"
              className="img-fluid testimonialimage"
            />
            <h6 className="fs-4 mt-3 clientName">User 3</h6>
            <p className="fs-6">UI / UX Designer</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="d-block">
            <img
              src={testimonialimage}
              alt="testimonialimage"
              className="img-fluid testimonialimage"
            />
            <h6 className="fs-4 mt-3 clientName">User 4</h6>
            <p className="fs-6">Developer</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="d-block">
            <img
              src={testimonialimage}
              alt="testimonialimage"
              className="img-fluid testimonialimage"
            />
            <h6 className="fs-4 mt-3 clientName">User 5</h6>
            <p className="fs-6">CEO</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="d-block">
            <img
              src={testimonialimage}
              alt="testimonialimage"
              className="img-fluid testimonialimage"
            />
            <h6 className="fs-4 mt-3 clientName">User 6</h6>
            <p className="fs-6">CEO</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="d-block">
            <img
              src={testimonialimage}
              alt="testimonialimage"
              className="img-fluid testimonialimage"
            />
            <h6 className="fs-4 mt-3 clientName">User 7</h6>
            <p className="fs-6">CEO</p>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default ClientDetail;
