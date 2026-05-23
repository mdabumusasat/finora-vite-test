import React from "react";
import { Link } from "react-router-dom";
import BannerBg from "../assets/images/banner/1.jpg";
import Service1Img1 from "../assets/images/resource/service1-2.jpg";
import Service1Icon1 from "../assets/images/icons/service1-1.png";
import Service1Img2 from "../assets/images/resource/service1-1.jpg";
import Service1Icon2 from "../assets/images/icons/service1-2.png";
import Service1Img3 from "../assets/images/resource/service1-3.jpg";
import Service1Icon3 from "../assets/images/icons/service1-3.png";
import Service1Img4 from "../assets/images/resource/service1-4.jpg";
import Service1Icon4 from "../assets/images/icons/service1-4.png";

export default function ServiceSection() {
  return (
        <section className="service-section-h1 mt-120 mb-120">
          <div className="large-container">
            <div className="outer-box">
              <div className="bg-image bg"><img src={BannerBg} alt=""/></div>
              <div className="row">
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="image"><img src={Service1Img1} alt=""/></div>
                      <div className="icon"><img src={Service1Icon1} alt=""/></div>
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
                      <div className="image"><img src={Service1Img2} alt=""/></div>
                      <div className="icon"><img src={Service1Icon2} alt=""/></div>
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
                      <div className="image"><img src={Service1Img3} alt=""/></div>
                      <div className="icon"><img src={Service1Icon3} alt=""/></div>
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
                      <div className="image"><img src={Service1Img4} alt=""/></div>
                      <div className="icon"><img src={Service1Icon4} alt=""/></div>
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
            </div>
          </div>
        </section>
  );
}