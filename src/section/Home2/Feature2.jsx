import React from "react";
import { Link } from "react-router-dom";
import FeatureIcon2 from "../../assets/images/icons/feature-icon2.png";
import Shape8 from "../../assets/images/icons/shape8.png";
import FeatureIcon3 from "../../assets/images/icons/feature-icon3.png";
import FeatureIcon4 from "../../assets/images/icons/feature-icon4.png";
import FeatureIcon5 from "../../assets/images/icons/feature-icon5.png";
import FeatureImage from "../../assets/images/resource/feature3-2.jpg";

const featureInfos = [
  {
    icon: FeatureIcon3,
    title: (
      <>
        Biometric <br />
        Login
      </>
    ),
  },
  {
    icon: FeatureIcon4,
    title: (
      <>
        OTP <br />
        Codes
      </>
    ),
  },
  {
    icon: FeatureIcon5,
    title: (
      <>
        Device <br />
        Authorization
      </>
    ),
  },
];

const FeatureSectionTwo = () => {
  return (
    <section className="feature-section-three pt-0">
      <div className="inner-container">
        <div className="row g-4 g-xl-0">
          <div className="col-xl-4 col-lg-6">
            <div className="feature-block-three">
              <div className="inner-block">
                <div className="sec-title light">
                  <div className="sub-title">
                    Security & Compliance
                  </div>
                  <h2 className="title text-reveal-anim">
                    Enterprise-Grade Security
                    Built for Modern Finance
                  </h2>
                </div>
                <div className="bottom-box">
                  <div className="text">
                    Our infrastructure
                    follows global financial
                    security standards with
                    bank-grade encryption,
                    regulatory compliance,
                    and continuous fraud
                    monitoring to ensure your
                    funds and data remain
                    safe at all times.
                  </div>

                  <Link
                    to="/"
                    className="btn-style-one"
                  >
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
              </div>
            </div>
          </div>

          {/* Center Feature */}
          <div className="col-xl-4 col-lg-6">
            <div className="feature-block-six">
              <div className="inner-block">
                {/* Icon Box */}
                <div className="feature-icon-box">
                  <div className="feature-icon">
                    <img
                      src={FeatureIcon2}
                      alt="Feature Icon"
                    />
                  </div>

                  <div className="shape1">
                    <img
                      src={Shape8}
                      alt="Shape"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="content-box">
                  <h3 className="title">
                    Multi-Layer Identify
                    <br />
                    Protection Next-Gen
                    Protocol
                  </h3>

                  {/* Feature Info */}
                  <div className="feature-info-box">
                    {featureInfos.map(
                      (item, index) => (
                        <div
                          className="feature-info"
                          key={index}
                        >
                          <div className="icon">
                            <img
                              src={
                                item.icon
                              }
                              alt="Feature"
                            />
                          </div>

                          <div className="h6 title">
                            {item.title}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="feature-image-block">
              <img
                src={FeatureImage}
                alt="Feature"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionTwo;