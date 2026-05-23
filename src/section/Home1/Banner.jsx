import { Link } from "react-router-dom";
import shape1 from "../../assets/images/banner/1.jpg";
import shape2 from "../../assets/images/icons/shape2.png";
import React from "react";


export default function BannerSection() {
  return (
        <section className="banner-section">
          <div className="bg-image bg"><img src={shape1} alt=""/></div>
          <div className="shape1 bounce-x"><img src={shape2} alt=""/></div>
          <div className="inner-container">
            <div className="h1 title denge-words">Smart Digital Banking for the World</div>
            <Link to="/page-contact" className="btn-style-one">
              <span className="left-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
              <span className="btn-title">Get Started Today</span>
              <span className="right-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
            </Link>
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line2 bounce-y"></div>
            </div>
          </div>
        </section>
  );
}