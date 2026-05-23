import React from "react";
import { Link } from "react-router-dom";
import CounterUp from '../../lib/CounterUp';
import AboutImage1 from "../../assets/images/resource/about1.jpg";
import AboutImage2 from "../../assets/images/resource/about-author1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its laout. The point of using Lorem Ipsum is that normal ",
  },
  {
    id: 2,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its laout. The point of using Lorem Ipsum is that normal ",
  },
  {
    id: 3,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its laout. The point of using Lorem Ipsum is that normal ",
  },
];

const counters = [
  { value: 25 },
  { value: 4.5 },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="sec-title">
          <div className="sub-title">Who We Are</div>
          <div className="h2 title text-reveal-anim">
            We Are A Next-Generation Fintech Platform Committed To
            Transforming How Individuals And Businesses Manage Money.
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="image-box">
              <div className="image">
                <img
                  src={AboutImage1}
                  alt="About"
                />
              </div>
              <div className="experience-one">
                <div className="count-box">
                  <span className="count-text">
                    <CounterUp end={counters[0].value} />
                  </span>
                  +
                </div>
                <div className="h6 count-title">
                  Years of Work Experience
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-8">
            <div className="about-content2">
              <div className="h4 sub-title">
                <i className="icon fa-solid fa-plus"></i>
                <span>Our Vision</span>
              </div>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".pagination-content-swiper2",
                  }}
                  className="about-content-swiper2">
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="text">
                        {slide.text}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Pagination */}
                <div className="pagination-content-swiper2 mt-4"></div>
            </div>
            <div className="about-list-box">
              <div className="left-box">
                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Bank-Grade Security
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    End-to-End Encryption
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Real-Time Transactions
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Global Payment Access
                  </li>
                </ul>
                <Link to="/page-about" className="btn-style-one">
                  <span className="left-arrow">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </span>
                  <span className="btn-title">Discover More</span>
                  <span className="right-arrow">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
              <div className="right-box">
                <div className="experience-three">
                  <div className="author-image">
                    <img
                      src={AboutImage2}
                      alt="Author"
                    />
                  </div>
                  <div className="count-box">
                    <span className="count-text">
                      <CounterUp end={counters[1].value} />
                    </span>
                    M+
                  </div>
                  <div className="h6 count-title">
                    Verified Users
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;