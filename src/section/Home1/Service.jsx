import React from "react";
import { Link } from "react-router-dom";
import BannerBg from "../../assets/images/banner/1.jpg";
import ServiceImage1 from "../../assets/images/icons/service1-1.png";
import ServiceImage2 from "../../assets/images/icons/service1-2.png";
import ServiceImage3 from "../../assets/images/icons/service1-3.png";
import ServiceImage4 from "../../assets/images/icons/service1-4.png";
import ServiceImage5 from "../../assets/images/resource/service1-1.jpg";
import ServiceImage6 from "../../assets/images/resource/service1-2.jpg";
import ServiceImage7 from "../../assets/images/resource/service1-3.jpg";
import ServiceImage8 from "../../assets/images/resource/service1-4.jpg";
import ServiceIconImage from "../../assets/images/icons/power1.png";

export default function ServiceSection() {
  return (
        <section className="service-section-h1">
          <div className="large-container">
            <div className="outer-box">
              <div className="bg-image bg"><img src={BannerBg} alt=""/></div>
              <div className="sec-title light text-center">
                <div className="sub-title">Our Service</div>
                <div className="h2 title">What We are Offering to Our <br className="d-none d-md-block"/>Potential Client</div>
              </div>
              <div className="row">
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="image"><img src={ServiceImage6} alt=""/></div>
                      <div className="icon"><img src={ServiceImage1} alt=""/></div>
                      <div className="content-box">
                        <div className="inner-box">
                          <div className="h4 title"><Link to="/page-service-details">Digital Banking Services</Link></div>
                          <div className="text">It is a long established fact that a reader will be distracted by the readable content</div>
                          <Link to="/page-service-details" className="btn-more"><span className="btn-title">Learn More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="image"><img src={ServiceImage5} alt=""/></div>
                      <div className="icon"><img src={ServiceImage2} alt=""/></div>
                      <div className="content-box">
                        <div className="inner-box">
                          <div className="h4 title"><Link to="/page-service-details">Global Transfers</Link></div>
                          <div className="text">It is a long established fact that a reader will be distracted by the readable content</div>
                          <Link to="/page-service-details" className="btn-more"><span className="btn-title">Learn More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="image"><img src={ServiceImage7} alt=""/></div>
                      <div className="icon"><img src={ServiceImage3} alt=""/></div>
                      <div className="content-box">
                        <div className="inner-box">
                          <div className="h4 title"><Link to="/page-service-details">Banking Solution</Link></div>
                          <div className="text">It is a long established fact that a reader will be distracted by the readable content</div>
                          <Link to="/page-service-details" className="btn-more"><span className="btn-title">Learn More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="image"><img src={ServiceImage8} alt=""/></div>
                      <div className="icon"><img src={ServiceImage4} alt=""/></div>
                      <div className="content-box">
                        <div className="inner-box">
                          <div className="h4 title"><Link to="/page-service-details">Fraud Protection</Link></div>
                          <div className="text">It is a long established fact that a reader will be distracted by the readable content</div>
                          <Link to="/page-service-details" className="btn-more"><span className="btn-title">Learn More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-box">
                <div className="inner">
                  <div className="icon"><img src={ServiceIconImage} alt=""/></div><span className="text">We strive to lead the way in the caring. </span> <Link to="/page-service-details" className="btn-more">Know All Services <i className="fa-light fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}