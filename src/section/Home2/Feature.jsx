import React from "react";
import { Link } from "react-router-dom";
import FeatureIcon1 from "../../assets/images/icons/feature4-1.png";
import FeatureIcon2 from "../../assets/images/icons/feature4-2.png";
import FeatureIcon3 from "../../assets/images/icons/feature4-3.png";
import FeatureIcon4 from "../../assets/images/icons/feature4-4.png";
import FeatureImage1 from "../../assets/images/resource/feature5-1.jpg";
import FeatureImage2 from "../../assets/images/resource/feature5-2.jpg";
import FeatureImage3 from "../../assets/images/resource/feature5-3.jpg";
import FeatureImage4 from "../../assets/images/resource/feature5-4.jpg";

const features = [
  {
    number: "01",
    icon: FeatureIcon1,
    image: FeatureImage1,
    title: "Professional Finance Banking",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    number: "02",
    icon: FeatureIcon2,
    image: FeatureImage2,
    title: "Professional Finance Banking",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    number: "03",
    icon: FeatureIcon3,
    image: FeatureImage3,
    title: "Professional Finance Banking",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    number: "04",
    icon: FeatureIcon4,
    image: FeatureImage4,
    title: "Professional Finance Banking",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const FeatureSectionTwo = () => {
  return (
    <section className="feature-section-five">
      <div className="inner-container">
        <div className="sec-title text-md-center">
          <div className="sub-title">
            Latest Projects
          </div>
          <h2 className="title text-reveal-anim">
            What We are Offering to Our
            <br className="d-none d-md-block" />
            Potential Client
          </h2>
        </div>
        <div className="feature-outer-five des-feature-wrap">
          {features.map((item, index) => (
            <div
              className="feature-block-five des-feature-panel"
              key={index}>
              <div className="inner-block">
                <div className="feature-left-box">
                  <div className="icon">
                    <img
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <h3 className="title">
                    {item.title}
                  </h3>
                </div>
                <div className="feature-center-box">
                  <div className="image">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="number">
                    {item.number} <span>.</span>
                  </div>
                </div>
                <div className="feature-right-box">
                  <div className="text">
                    {item.text}
                  </div>
                  <Link
                    to="/page-service-details"
                    className="view-details">
                    View Details
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionTwo;