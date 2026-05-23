import React from "react";
import { Link } from "react-router-dom";
import Shape5 from "../../assets/images/icons/shape5.png";
import ServiceIcon1 from "../../assets/images/icons/service2-icon1.png";
import ServiceIcon2 from "../../assets/images/icons/service2-icon2.png";
import ServiceIcon3 from "../../assets/images/icons/service2-icon3.png";
import ServiceIcon4 from "../../assets/images/icons/service2-icon4.png";
import PowerIcon from "../../assets/images/icons/power1.png";

const services = [
  {
    icon: ServiceIcon1,
    title: "Digital Banking Services",
    link: "/page-service-details",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: ServiceIcon2,
    title: "Global Transfers",
    link: "/page-service-details",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: ServiceIcon3,
    title: "Banking Solution",
    link: "/page-service-details",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: ServiceIcon4,
    title: "Fraud Protection",
    link: "/page-service-details",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const features = [
  "Bank-Grade Security",
  "End-to-End Encryption",
  "Real-Time Transactions",
];

const ServiceSectionLayout2 = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="sec-title-outer">
          <div className="sec-title">
            <div className="sub-title">
              Our Service
            </div>
            <h2 className="title text-reveal-anim">
              What We are Offering to Our
              Potential Client
            </h2>
          </div>
          <div className="text-box">
            <div className="shape animation__rotateY">
              <img
                src={Shape5}
                alt="Shape"
              />
            </div>
            <div className="text">
              It is a long established fact
              that a reader will be distracted
              by the readable content of a
              page when looking at its
              layout.
            </div>
          </div>
        </div>
      </div>
      <div className="outer-box">
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              key={index}>
              <div className="service-block-two">
                <div className="inner-block">
                  <i className="icon-plus fa-sharp fa-regular fa-plus"></i>
                  <div className="content">
                    <div className="icon">
                      <img
                        src={service.icon}
                        alt={service.title}
                      />
                    </div>
                    <h4 className="title">
                      <Link to={service.link}>
                        {service.title}
                      </Link>
                    </h4>
                    <div className="text">
                      {service.text}
                    </div>
                  </div>
                  <ul className="services-list">
                    {features.map(
                      (feature, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check"></i>
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Box */}
        <div className="bottom-box">
          <div className="inner">
            <div className="icon">
              <img
                src={PowerIcon}
                alt="Power Icon"
              />
            </div>
            <span className="text">
              We strive to lead the way in
              the caring.
            </span>
            <Link
              to="/page-service-details"
              className="btn-more">
              Know All Services
              <i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionLayout2;