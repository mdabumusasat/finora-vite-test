import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ServiceDetailsImg from "../assets/images/resource/service-details.jpg";
import ServiceD1 from "../assets/images/resource/service-d1.jpg";
import ServiceD2 from "../assets/images/resource/service-d2.jpg";

const services = [
  "Strategic Financial",
  "Business Growth",
  "Investment Advisory",
  "Risk Management",
  "Corporate Finance",
  "Profit Optimization",
];

const sliderImages = [ServiceD1, ServiceD2, ServiceD1];

const faqData = [
  {
    q: "01 Share Your Idea",
    a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    q: "02 Get a Custom Plan",
    a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    q: "03 We Start the Work",
    a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    q: "04 Enjoy Your New Space",
    a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less will be distracted by the readable content of a page when looking at its layout.",
  },
];

export default function ServiceDetailsSection() {
  const [activeFaq, setActiveFaq] = useState(1);

  return (
    <section className="services-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    {services.map((item, i) => (
                      <li key={i} className={i === 1 ? "current" : ""}>
                        <Link to="/page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>{item}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <h2 className="help-title">
                    Contact with <br /> us for any <br /> advice
                  </h2>
                  <div className="help-icon">
                    <span className="lnr-icon-phone-handset"></span>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <Link to="#">+892 (123) 112 - 9999</Link>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div className="service-sidebar-single-btn">
                    <Link to="#" className="theme-btn btn-style-one d-flex align-items-center"><span className="fas fa-file-pdf"></span> download pdf file</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <div className="service-details-image fix">
                <img
                  src={ServiceDetailsImg}
                  alt="Service"
                />
              </div>
              <h3 className="mt-4">Service Overview</h3>
              <p className="text">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              <p className="text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit  </p>
              <div className="content mt-40">
                <div className="text">
                  <h3>Service Center</h3>
                  <p className="text">
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <blockquote className="blockquote-one mb-20">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur
                  </blockquote>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 4000 }}
                  loop
                  spaceBetween={30}
                  slidesPerView={2}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 2 },
                  }}
                  className="project-image-slider">
                  {sliderImages.map(
                    (img, i) => (
                      <SwiperSlide key={i}>
                        <div className="image">
                          <img
                            className="w-100"
                            src={img}
                            alt=""
                          />
                        </div>
                        <p className="text mt-10">
                          Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing
                        </p>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
              <div className="faq-content mt-5">
                <h3 className="mb-3">Frequently Asked Question</h3>
                <p className="text">
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="accordion-box p-0 mt-40">
                  {faqData.map((item, i) => (
                    <li
                      key={i}
                      className={`accordion block ${
                        activeFaq === i ? "active-block" : ""
                      }`}>
                      <div
                        className={`acc-btn ${
                          activeFaq === i ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveFaq(activeFaq === i ? -1 : i)
                        }>
                        {item.q}
                        <div className={`icon fa ${
                          activeFaq === i ? "fa-minus" : "fa-plus"
                        }`}></div>
                      </div>
                      <div
                        className={`acc-content ${
                          activeFaq === i ? "current" : ""
                        }`}>
                        <div className="content">
                          <div className="text">{item.a}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
