import React from "react";
import { Link } from "react-router-dom";
import BlogImg1 from "../../assets/images/resource/blog1-1.jpg";
import BlogImg2 from "../../assets/images/resource/blog1-2.jpg";
import BlogImg3 from "../../assets/images/resource/blog1-3.jpg";

export default function BlogSection() {
  return (
    <section className="blog-section pb-100">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">Articles</div>
          <div className="h2 title text-reveal-anim">Check Out Latest News <br/>Update & Articles</div>
        </div>
        <div className="row g-24">
          <div className="blog-block col-xl-4 col-md-6">
            <div className="inner-block">
              <div className="image"><Link to="/news-details"><img src={BlogImg1} alt=""/><img src={BlogImg1} alt=""/></Link></div>
              <div className="content">
                <div className="h6 category">DigitalBanking</div>
                <div className="h4 title"><Link to="/news-details">The Future of Digital Banking: Trends Shaping 2026</Link></div>
                <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="blog-block col-xl-4 col-md-6">
            <div className="inner-block">
              <div className="image"><Link to="/news-details"><img src={BlogImg2} alt=""/><img src={BlogImg2} alt=""/></Link></div>
              <div className="content">
                <div className="h6 category">CyberSecurity</div>
                <div className="h4 title"><Link to="/news-details">How AI is Strengthening Fraud Detection in Fintech</Link></div>
                <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="blog-block col-xl-4 col-md-6">
            <div className="inner-block">
              <div className="image"><Link to="/news-details"><img src={BlogImg3} alt=""/><img src={BlogImg3} alt=""/></Link></div>
              <div className="content">
                <div className="h6 category">FinancialSecurity</div>
                <div className="h4 title"><Link to="/news-details">Understanding Regulatory Compliance in Financial Technology</Link></div>
                <Link to="/news-details" className="btn-more"><span className="btn-title">Read More</span> <i className="fa-light fa-arrow-up-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}