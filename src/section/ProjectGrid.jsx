import React from "react";
import { Link } from "react-router-dom";
import Feature4Icon1 from "../assets/images/icons/feature4-1.png";
import Feature4Icon2 from "../assets/images/icons/feature4-2.png";
import Feature4Icon3 from "../assets/images/icons/feature4-3.png";
import Feature4Icon4 from "../assets/images/icons/feature4-4.png";
import Feature5Img1 from "../assets/images/resource/feature5-1.jpg";
import Feature5Img2 from "../assets/images/resource/feature5-2.jpg";
import Feature5Img3 from "../assets/images/resource/feature5-3.jpg";
import Feature5Img4 from "../assets/images/resource/feature5-4.jpg";

export default function ProjectsSection() {
  return (
      <section className="feature-section-five">
        <div className="inner-container">
          <div className="feature-outer-five des-feature-wrap">
            <div className="feature-block-five des-feature-panel">
              <div className="inner-block">
                <div className="feature-left-box">
                  <div className="icon"><img src={Feature4Icon1} alt=""/></div>
                  <div className="h3 title">Professional Finance Banking</div>
                </div>
                <div className="feature-center-box">
                  <div className="image"><img src={Feature5Img1} alt=""/></div>
                  <div className="number">01 <span>.</span></div>
                </div>
                <div className="feature-right-box">
                  <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  <Link to="/page-project-details" className="view-details">View Details <i className="fa-light fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="feature-block-five des-feature-panel">
              <div className="inner-block">
                <div className="feature-left-box">
                  <div className="icon"><img src={Feature4Icon2} alt=""/></div>
                  <div className="h3 title">Professional Finance Banking</div>
                </div>
                <div className="feature-center-box">
                  <div className="image"><img src={Feature5Img2} alt=""/></div>
                  <div className="number">02 <span>.</span></div>
                </div>
                <div className="feature-right-box">
                  <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  <Link to="/page-project-details" className="view-details">View Details <i className="fa-light fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="feature-block-five des-feature-panel">
              <div className="inner-block">
                <div className="feature-left-box">
                  <div className="icon"><img src={Feature4Icon3} alt=""/></div>
                  <div className="h3 title">Professional Finance Banking</div>
                </div>
                <div className="feature-center-box">
                  <div className="image"><img src={Feature5Img3} alt=""/></div>
                  <div className="number">03 <span>.</span></div>
                </div>
                <div className="feature-right-box">
                  <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  <Link to="/page-project-details" className="view-details">View Details <i className="fa-light fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="feature-block-five des-feature-panel">
              <div className="inner-block">
                <div className="feature-left-box">
                  <div className="icon"><img src={Feature4Icon4} alt=""/></div>
                  <div className="h3 title">Professional Finance Banking</div>
                </div>
                <div className="feature-center-box">
                  <div className="image"><img src={Feature5Img4} alt=""/></div>
                  <div className="number">04 <span>.</span></div>
                </div>
                <div className="feature-right-box">
                  <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  <Link to="/page-project-details" className="view-details">View Details <i className="fa-light fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}