import { Link } from "react-router-dom";
import React from "react";
import Feature2Img1 from "../../assets/images/icons/feature-icon1.png";
import Feature2Img2 from "../../assets/images/icons/shape3.png";
import Feature2Img3 from "../../assets/images/resource/feature3-1.jpg";

export default function FeatureTwoSection() {
  return (
        <section className="feature-section-three pb-0 pt-100">
          <div className="inner-container">
            <div className="row g-4 g-xxl-0">
              <div className="col-xxl-4 col-md-6">
                <div className="feature-block-three">
                  <div className="inner-block">
                    <div className="sec-title light">
                      <div className="sub-title">Security & Compliance</div>
                      <div className="h2 title text-reveal-anim">Your Money Protected at Every Level</div>
                    </div>
                    <div className="bottom-box">
                      <div className="text">Our infrastructure follows global financial security standards with bank-grade encryption, regulatory compliance, and continuous fraud monitoring to ensure your funds and data remain safe at all times.</div>
                      <Link to="/page-about" className="btn-style-one">
                        <span className="left-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                        <span className="btn-title">Discover More</span>
                        <span className="right-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6">
                <div className="feature-block-four">
                  <div className="inner-block">
                    <div className="feature-icon-box">
                      <div className="feature-icon"><img src={Feature2Img1} alt=""/></div>
                      <div className="shape1 animation__rotateY"><img src={Feature2Img2} alt=""/></div>
                    </div>
                    <div className="content-box">
                      <i className="icon fa-solid fa-plus"></i>
                      <div className="h3 title">Bank-Level Encryption to Safeguard Every Transaction</div>
                      <ul className="feature-list">
                        <li><i className="fa-solid fa-check"></i>256-bit AES Encryption</li>
                        <li><i className="fa-solid fa-check"></i>End-to-End Encrypted Transfers</li>
                        <li><i className="fa-solid fa-check"></i>Zero Data Sharing Policy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4">
                <div className="feature-image-block">
                  <img src={Feature2Img3} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}