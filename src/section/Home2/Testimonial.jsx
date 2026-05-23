import React from "react";
import CounterUp from "../../lib/CounterUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestiImg from "../../assets/images/resource/testi1-2.jpg";
import QuoteIcon from "../../assets/images/icons/quote-icon2.png";

const testimonials = [
  {
    text:
      "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind truly stands out is the reliability transactions are smooth, reporting is accurate,",
    name: "Emily Carter",
    designation: "Senior Project Manager",
  },
  {
    text:
      "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind truly stands out is the reliability transactions are smooth, reporting is accurate,",
    name: "Michael Johnson",
    designation: "Operations Director",
  },
  {
    text:
      "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind truly stands out is the reliability transactions are smooth, reporting is accurate,",
    name: "Sarah Williams",
    designation: "Finance Manager",
  },
];

export default function TestimonialSectionThree() {
  return (
    <section className="testimonial-section-three p-0">
      <div className="container">
        <div className="inner-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <div className="sub-title">Testimonial</div>
              <div className="h2 title">
                What Our Best Customers Say
              </div>
            </div>
            <div className="count-info">
              <div className="count-box">
                <CounterUp end={4.9} />
              </div>
              <div className="info">
                <div className="review">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <div className="text">53+ Client reviews</div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="swiper-outer">
            <div className="quote-icon">
              <img src={QuoteIcon} alt="quote" />
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".array-prev",
                nextEl: ".array-next",
              }}
              className="testimonial-swiper-layout2 p-0">
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-block-three">
                    <div className="inner-block">
                      <div className="text">{item.text}</div>
                      <div className="author-info">
                        <div className="thumb">
                          <img
                            src={TestiImg}
                            alt={item.name}
                          />
                        </div>
                        <div className="info">
                          <div className="h5 name">{item.name}</div>
                          <span className="designation">
                            {item.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="array-button">
                <button type="button" className="array-prev">
                  <i className="fa-regular fa-angle-left"></i>
                </button>
                <button type="button" className="array-next">
                  <i className="fa-regular fa-angle-right"></i>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}