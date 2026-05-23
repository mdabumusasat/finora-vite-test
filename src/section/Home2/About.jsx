import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AboutImage from "../../assets/images/resource/about2.jpg";
import Shape1 from "../../assets/images/icons/shape1.png";
import ExperienceImage from "../../assets/images/resource/expe1-1.jpg";

const missionSlides = [
  "Our mission is to transform the way individuals and businesses interact with money by delivering secure, transparent, and techn-ology-driven financial solutions. We are committed to simplifying digital banking through innov-ation, advanced security",
  "Our mission is to transform the way individuals and businesses interact with money by delivering secure, transparent, and techn-ology-driven financial solutions. We are committed to simplifying digital banking through innov-ation, advanced security",
];

const aboutFeatures = [
  "Advanced Bank-Grade Protection System",
  "AI-Powered Fraud Detection Technology",
  "Instant Domestic & International Transfers",
  "Global Cross-Border Payment Solutions",
];

const AboutSectionTwo = () => {
  return (
    <section className="about-section-two">
      <div className="container">
        <div className="sec-title text-center mb-60">
          <div className="sub-title">
            Who We Are
          </div>
          <h2 className="title text-reveal-anim">
            Building a Trusted Digital
            Financial Ecosystem Focused on
            Innovation, Compliance, and
            Long-Term Customer Success
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-md-6">
            <div className="about-image">
              <img
                src={AboutImage}
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="about-content position-relative">
              <div className="h6 sub-title mb-4">
                Our Mission
              </div>
              <Swiper
                modules={[
                  Navigation,
                  Autoplay,
                ]}
                className="about-content-swiper p-0"
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".array-prev",
                  nextEl: ".array-next",
                }}>
                {missionSlides.map(
                  (text, index) => (
                    <SwiperSlide
                      key={index}
                    >
                      <div className="text">
                        {text}
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <div className="array-button">
                <button className="array-prev">
                  <i className="fa-regular fa-angle-left"></i>
                </button>
                <button className="array-next">
                  <i className="fa-regular fa-angle-right"></i>
                </button>
              </div>
              <div className="shape1">
                <img
                  src={Shape1}
                  alt="Shape"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-8">
            <div className="about-info-outer">
              <div className="about-list-box">
                <ul className="about-list">
                  {aboutFeatures.map(
                    (feature, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-check"></i>
                        {feature}
                      </li>
                    )
                  )}
                </ul>
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
              <div className="experience-two">
                <div className="expe-image">
                  <img
                    src={ExperienceImage}
                    alt="Experience"
                    className="img-fluid"
                  />
                </div>
                <div className="counter">
                  <div className="count-box">
                    <span className="count-text">
                      <CounterUp end={25} />
                    </span>
                    +
                  </div>
                  <div className="h6 count-title">
                    Years of Work
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;