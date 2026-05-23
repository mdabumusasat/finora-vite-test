import React from "react";
import CounterUp from "../lib/CounterUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestiImg2 from "../assets/images/resource/testi1-2.jpg";
import QuoteIcon2 from "../assets/images/icons/quote-icon2.png";

const testimonials = [
  {
    text: "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind. What truly stands out is the reliability—transactions are smooth and reporting is accurate.",
    name: "Emily Carter",
    designation: "Senior Project Manager",
    image: TestiImg2,
  },
  {
    text: "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind. What truly stands out is the reliability—transactions are smooth and reporting is accurate.",
    name: "Michael Johnson",
    designation: "Operations Director",
    image: TestiImg2,
  },
  {
    text: "Switching to this platform completely transformed how we manage our company finances. The real-time analytics, instant transfers, and advanced security features give us full visibility and peace of mind. What truly stands out is the reliability—transactions are smooth and reporting is accurate.",
    name: "Sarah Williams",
    designation: "Finance Manager",
    image: TestiImg2,
  },
];

export default function TestimonialSectionThree() {
  return (
    <section className="testimonial-section-three m-0">
      <div className="container">
        <div className="inner-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <div className="sub-title">Testimonial</div>
              <div className="h2 title">
                What Our Best <br />
                Customers Say
              </div>
            </div>
            <div className="count-info">
              <div className="count-box">
                <span className="count-text">
                  <CounterUp end={4.9} />
                </span>
              </div>
              <div className="info">
                <div className="review">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <div className="text">53+ Client reviews</div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="swiper-outer">
            <div className="quote-icon">
              <img
                src={QuoteIcon2}
                alt="Quote Icon"
              />
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              className="testimonial-swiper-layout2 p-0"
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".testimonial-swiper-layout2 .array-prev",
                nextEl: ".testimonial-swiper-layout2 .array-next",
              }}>
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-block-three">
                    <div className="inner-block">
                      <div className="text">{testimonial.text}</div>
                      <div className="author-info">
                        <div className="thumb">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-circle"
                          />
                        </div>
                        <div className="info">
                          <div className="h5 name">
                            {testimonial.name}
                          </div>
                          <span className="designation">
                            {testimonial.designation}
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