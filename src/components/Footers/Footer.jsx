import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import shape1 from "../../assets/images/resource/footer1-1.jpg";

const Footer = () => {

  return (
    <footer className="footer-style-one">
      <div className="container">
        <div className="footer-top">
          <div className="h2 title">Take Control of Your Financial Future <br className="d-none d-md-block"/>with a Secure & Smarter Banking Experience</div>
          <Link to="/page-contact" className="btn-get-in">Get <br/>In Touch</Link>
        </div>
        <div className="footer-lower">
          <div className="row">
            <div className="col-xl-3">
              <div className="image"><img src={shape1} alt=""/></div>
            </div>
            <div className="col-xl-9">
              <div className="lower-outer">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="footer-info-outer">
                      <div className="footer-info">
                        <div className="h5 info-title">Address</div>
                        <div className="text">1901 Thornridge Cir. Shiloh Hawaii 81063</div>
                      </div>
                      <div className="footer-info mb-0">
                        <div className="h5 info-title">Phone</div>
                        <div className="info">
                          <Link to="#">+629 555-0129</Link>
                          <Link to="#">demo@example.com</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="footer-widget-items">
                      <div className="h5 widget-title">Company</div>
                      <ul className="user-links">
                        <li><Link to="/page-about">About</Link></li>
                        <li><Link to="#">Our Mission</Link></li>
                        <li><Link to="#">Our Blogs</Link></li>
                        <li><Link to="#">Help Center</Link></li>
                        <li><Link to="/page-contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-5" data-wow-delay=".3s">
                    <div className="footer-contact-items">
                      <div className="h5 widget-title">Subscribe</div>
                      <form action="#">
                        <div className="form-group">
                          <input className="email" type="text" name="email" id="email" placeholder="Enter email" />
                          <button type="submit"><i className="fa-solid fa-arrow-up-right"></i></button>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="privacyPolicy"/>
                          <label className="form-check-label">I agree to the privacy policy.</label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="lower-bottom">
                  <div className="logo"><img src={logo} alt=""/></div>
                  <div className="footer-social">
                    <div className="h5 widget-title">Follow Us</div>
                    <div className="social-icon">
                      <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                      <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                      <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                      <Link to="#"><i className="fa-brands fa-pinterest"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 offset-xl-3">
            <div className="footer-bottom">
              <p>© Copyright 2026 by Company.com</p>
              <ul className="footer-menu">
                <li><Link to="/page-contact">Terms & Condition</Link></li>
                <li><Link to="/page-contact">Privacy Policy</Link></li>
                <li><Link to="/page-contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;