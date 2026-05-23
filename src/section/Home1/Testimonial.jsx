import React from "react";
import CounterUp from "../../lib/CounterUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestiAuthor from "../../assets/images/resource/testi-author1.png";
import TestiLogo from "../../assets/images/icons/testi-info-logo.png";
import QuoteIcon from "../../assets/images/icons/quote2.png";

const testimonials = [
  {
    text: "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind. What truly stands out is the reliability — transactions are smooth, reporting is accurate.",
    name: "Jonathan Miller",
    designation: "Senior Manager at Company LLC",
  },
  {
    text: "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind. What truly stands out is the reliability — transactions are smooth, reporting is accurate.",
    name: "Sarah Johnson",
    designation: "Finance Director at Tech Corp",
  },
  {
    text: "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind. What truly stands out is the reliability — transactions are smooth, reporting is accurate.",
    name: "Michael Brown",
    designation: "Operations Lead at Global Inc",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section pb-lg-0">
      <div className="container">
        <div className="row">
          {/* Left Info Column */}
          <div className="col-lg-5 col-xxl-3 offset-xxl-2 mb-5 mb-lg-0">
            <div className="testimonial-info">
              {/* Author Image */}
              <div className="testi-author-image">
                <img
                  src={TestiAuthor}
                  alt="Testimonial Author"
                  className="img-fluid"
                />
              </div>

              {/* Subtitle */}
              <div className="h6 sub-title">
                Clients Testimonials
              </div>

              {/* Counter */}
              <div className="counter">
                <div className="count-box">
                  <span className="count-text">
                    <CounterUp end={98} />
                  </span>
                  %
                </div>

                <div className="h5 count-title">
                  Happy <br />
                  Customer
                </div>
              </div>

              {/* Reviews */}
              <div className="review-box">
                <div className="review">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className="fas fa-star"
                    ></i>
                  ))}
                </div>

                <div className="text">
                  4.8/5.0 rating based on 485 reviews
                </div>
              </div>

              {/* Logo */}
              <div className="testi-info-logo">
                <img
                  src={TestiLogo}
                  alt="Logo"
                />
              </div>
            </div>
          </div>

          {/* Right Slider Column */}
          <div className="col-lg-7">
            <div className="swiper-outer">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".swiper-pagination-layout1",
                  clickable: true,
                }}
                className="testimonial-swiper-layout1 p-0"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-block-tow">
                      <div className="inner-block">
                        {/* Top */}
                        <div className="top-box">
                          <div className="quote-icon">
                            <img
                              src={QuoteIcon}
                              alt="Quote"
                            />
                          </div>

                          <div className="review">
                            {[...Array(5)].map(
                              (_, starIndex) => (
                                <i
                                  key={starIndex}
                                  className="fas fa-star"
                                ></i>
                              )
                            )}
                          </div>
                        </div>

                        {/* Text */}
                        <div className="text">
                          {item.text}
                        </div>

                        {/* Author */}
                        <div className="author-info">
                          <div className="h4 name">
                            {item.name}
                          </div>

                          <span className="designation">
                            {item.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Pagination */}
                <div className="swiper-pagination-layout1 justify-content-end"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;