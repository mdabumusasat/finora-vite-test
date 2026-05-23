import { Link } from "react-router-dom";
import React from "react";
import shape1 from "../../assets/images/icons/feature1-1.png";
import shape2 from "../../assets/images/icons/feature1-2.png";
import shape3 from "../../assets/images/icons/feature1-3.png";

export default function FeatureSection() {
  return (
        <section className="feature-section p-0">
          <div className="container">
            <div className="feature-outer">
              <div className="feature-block">
                <div className="inner-block">
                  <div className="icon"><img src={shape1} alt=""/></div>
                  <div className="h4 title"><Link to="/page-service-details">Smart Digital Wallet</Link></div>
                  <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  <i className="icon-plus fa-sharp fa-regular fa-plus"></i>
                </div>
              </div>
              <div className="feature-block">
                <div className="inner-block">
                  <div className="icon"><img src={shape2} alt=""/></div>
                  <div className="h4 title"><Link to="/page-service-details">Investment Dashboard</Link></div>
                  <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  <i className="icon-plus fa-sharp fa-regular fa-plus"></i>
                </div>
              </div>
              <div className="feature-block">
                <div className="inner-block">
                  <div className="icon"><img src={shape3} alt=""/></div>
                  <div className="h4 title"><Link to="/page-service-details">Advanced Security</Link></div>
                  <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  <i className="icon-plus fa-sharp fa-regular fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}