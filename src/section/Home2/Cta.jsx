import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import CtaBg from "../../assets/images/background/4.jpg";

const CtaSectionTwo = () => {
  return (
    <section className="cta-section position-relative">
      <div className="bg-image bg tm-gsap-img-parallax">
        <img
          src={CtaBg}
          alt="CTA Background"
          className="img-fluid w-100"
        />
      </div>
      <div className="container">
        <div className="inner-container">
          <h2 className="title">
            We Secure Every Transaction with
            Advanced Technology.
          </h2>
          <div className="why-choose-box">
            <div className="counter-box">
              <div className="h5 sub-title">
                Up to
              </div>
              <div className="count-box">
                <CounterUp end={99} />%
              </div>
              <div className="h5 title-count">
                Platform uptime and real-time
                fraud monitoring accuracy
              </div>
            </div>
            <div className="button-box">
              <Link
                to="/"
                className="btn-style-one">
                <span className="left-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
                <span className="btn-title">
                  Protect Your Finances Today
                </span>
                <span className="right-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionTwo;