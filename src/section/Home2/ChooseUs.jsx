import React from "react";
import WhyChooseImage from "../../assets/images/resource/why-choose2.jpg";
import Author4 from "../../assets/images/resource/author4.jpg";
import Author5 from "../../assets/images/resource/author5.jpg";
import Author6 from "../../assets/images/resource/author6.jpg";
import Author7 from "../../assets/images/resource/author7.jpg";
import FeatureIcon1 from "../../assets/images/icons/feature3-1.png";
import FeatureIcon2 from "../../assets/images/icons/feature3-2.png";
import FeatureIcon3 from "../../assets/images/icons/feature3-3.png";
import FeatureIcon4 from "../../assets/images/icons/feature3-4.png";

const authors = [
  Author4,
  Author5,
  Author6,
  Author7,
];

const features = [
  {
    number: "/01",
    icon: FeatureIcon1,
    title: "Instant transaction alerts",
    text: "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    number: "/02",
    icon: FeatureIcon2,
    title: "Regulatory compliant platform",
    text: "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    number: "/03",
    icon: FeatureIcon3,
    title: "100% Transparent pricing",
    text: "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    number: "/04",
    icon: FeatureIcon4,
    title: "24/7 customer support",
    text: "It is a long established fact that a reader will be distracted by the readable",
  },
];

const ChooseUsSectionTwo = () => {
  return (
    <section className="why-choose-us-two">
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-xl-4">
              <div className="sub-title">
                Why Choose Us
              </div>
            </div>
            <div className="col-xl-8">
              <h2 className="title text-reveal-anim">
                Why Leading Business &
                Individuals
                <br className="d-none d-xxxl-block" />
                Trust Our Secure and
                Financial
                <br className="d-none d-xxxl-block" />
                Platform
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-8 mb-5 mb-xl-0">
            <div className="images-column">
              <div className="inner-column">
                <div className="image">
                  <img
                    src={WhyChooseImage}
                    alt="Why Choose Us"
                    className="img-fluid"
                  />
                </div>
                <div className="info-image">
                  <div className="image-box">
                    {authors.map(
                      (author, index) => (
                        <img
                          key={index}
                          src={author}
                          alt={`Author ${
                            index + 4
                          }`}
                        />
                      )
                    )}
                    <i className="icon fa-solid fa-plus"></i>
                  </div>
                  <div className="h6">
                    Skilled Hands, Honest
                    Hearts
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row g-2">
              {features.map(
                (feature, index) => (
                  <div
                    className="col-md-6"
                    key={index}>
                    <div className="feature-block-two">
                      <div className="inner-block">
                        <div className="number">
                          {feature.number}
                        </div>
                        <div className="icon">
                          <img
                            src={
                              feature.icon
                            }
                            alt={
                              feature.title
                            }
                          />
                        </div>
                        <h4 className="title">
                          {feature.title}
                        </h4>
                        <div className="text">
                          {feature.text}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSectionTwo;