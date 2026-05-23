import React from "react";
import ContactImg1 from "../../assets/images/background/contact-bg.jpg";
import ContactImg2 from "../../assets/images/icons/airplane1.png";
import ContactImg3 from "../../assets/images/icons/feature-icon1.png";
import ContactImg4 from "../../assets/images/icons/shape3.png";

export default function ContactSectionLayout2() {
  return (
    <section className="contact-section-two">
      <div className="inner-container">
        <div className="image-column wow fadeInUp">
          <div className="inner-column">
            <div className="image"><img src={ContactImg1} alt=""/></div>
            <div className="content-outer">
              <div className="sec-title">
                <div className="sub-title">Contact</div>
                <div className="h2 title text-reveal-anim">Contact Our Team for <br className="d-none d-xxxl-block"/>Personalized Financial Assistance</div>
              </div>
              <div className="contact-info-outer">
                <div className="contact-info">
                  <div className="h5 title">Location:</div>
                  <div className="info">
                    <i className="icon fa-classic fa-solid fa-location-dot"></i>
                    <div className="text">2715 Ash Dr. San Jose, South Dakota 83475</div>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="h5 title">Email:</div>
                  <div className="info">
                    <i className="icon fa-classic fa-solid fa-phone-flip"></i>
                    <div className="text">Phone: +629 555-0129 <br/>Email: demo@email.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-column wow fadeInUp">
          <div className="form-outer">
            <div className="title-box">
              <div className="h3 title">Schedule a Free <br/> workable Consultation</div>
              <img src={ContactImg2} alt=""/>
            </div>
            <div className="contact-form">
              <form>
                <div className="row g-20">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="username" placeholder="First Name" />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="username" placeholder="Last Name" />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="phone" placeholder="Phone Number" />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="text" placeholder="Company" />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="text" placeholder="Address" />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="btn-style-one">
                      <span className="left-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                      <span className="btn-title">Submit Request</span>
                      <span className="right-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="feature-icon-box bounce-y">
              <div className="feature-icon"><img src={ContactImg3} alt=""/></div>
              <div className="shape1 animation__rotateY"><img src={ContactImg4} alt=""/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}