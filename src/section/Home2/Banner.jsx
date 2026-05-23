import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import BannerBg from "../../assets/images/banner/2.jpg";

const counters = [
  { value: 45 },
  { value: 62 },
];

const BannerSectionTwo = () => {
  return (
    <section className="banner-section-two position-relative">
      <div className="bg-image bg">
        <img
          src={BannerBg}
          alt="Banner Background"
          className="img-fluid w-100"
        />
      </div>
      <div className="inner-container">
        <div className="content-box">
          <h1 className="title denge-words">
            Trusted Digital Banking for Smart
            Organizations
          </h1>
          <Link
            to="/page-about"
            className="btn-style-one">
            <span className="left-arrow">
              <i className="fa-regular fa-arrow-up-right"></i>
            </span>
            <span className="btn-title">
              Discover More
            </span>
            <span className="right-arrow">
              <i className="fa-regular fa-arrow-up-right"></i>
            </span>
          </Link>
        </div>

        {/* Counter Info */}
        <div className="banner-info-box">
          {/* Counter One */}
          <div className="count-info">
            <div className="count-box">
              <CounterUp
                end={counters[0].value}
              />
              %
            </div>

            <div className="h5 title">
              Verified Users
            </div>

            <div className="text">
              Reduction in <br />
              Operational Costs
            </div>
          </div>

          {/* Counter Two */}
          <div className="count-info-two">
            <div className="count-box">
              <CounterUp
                end={counters[1].value}
              />
              %
            </div>
            <div className="h5 title">
              Verified Users
            </div>

            <div className="text">
              Faster Transaction <br />
              Processing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionTwo;