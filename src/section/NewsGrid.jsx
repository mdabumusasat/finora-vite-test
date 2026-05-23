import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/images/resource/blog1-1.jpg";
import blog2 from "../assets/images/resource/blog1-2.jpg";
import blog3 from "../assets/images/resource/blog1-3.jpg";

export default function BlogSection() {
  return (
   
        <section className="blog-section pb-70">
          <div className="container">
            <div className="row">
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block mb-50">
                  <div className="image"><Link to="/news-details"><img src={blog1} alt=""/><img src={blog1} alt=""/></Link></div>
                  <div className="content">
                    <div className="h6 category">DigitalBanking</div>
                    <div className="h4 title"><Link to="/news-details">The Future of Digital Banking: Trends Shaping 2026</Link></div>
                    <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block mb-50">
                  <div className="image"><Link to="/news-details"><img src={blog2} alt=""/><img src={blog2} alt=""/></Link></div>
                  <div className="content">
                    <div className="h6 category">CyberSecurity</div>
                    <div className="h4 title"><Link to="/news-details">How AI is Strengthening Fraud Detection in Fintech</Link></div>
                    <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block mb-50">
                  <div className="image"><Link to="/news-details"><img src={blog3} alt=""/><img src={blog3} alt=""/></Link></div>
                  <div className="content">
                    <div className="h6 category">FinancialSecurity</div>
                    <div className="h4 title"><Link to="/news-details">Understanding Regulatory Compliance in Financial Technology</Link></div>
                    <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block mb-50">
                  <div className="image"><Link to="/news-details"><img src={blog2} alt=""/><img src={blog2} alt=""/></Link></div>
                  <div className="content">
                    <div className="h6 category">CyberSecurity</div>
                    <div className="h4 title"><Link to="/news-details">How AI is Strengthening Fraud Detection in Fintech</Link></div>
                    <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block mb-50">
                  <div className="image"><Link to="/news-details"><img src={blog3} alt=""/><img src={blog3} alt=""/></Link></div>
                  <div className="content">
                    <div className="h6 category">FinancialSecurity</div>
                    <div className="h4 title"><Link to="/news-details">Understanding Regulatory Compliance in Financial Technology</Link></div>
                    <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block mb-50">
                  <div className="image"><Link to="/news-details"><img src={blog1} alt=""/><img src={blog1} alt=""/></Link></div>
                  <div className="content">
                    <div className="h6 category">DigitalBanking</div>
                    <div className="h4 title"><Link to="/news-details">The Future of Digital Banking: Trends Shaping 2026</Link></div>
                    <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}