import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Client1 from "../../assets/images/resource/clients1-1.png";
import Client2 from "../../assets/images/resource/clients1-2.png";
import Client3 from "../../assets/images/resource/clients1-3.png";
import Client4 from "../../assets/images/resource/clients1-4.png";
import Client5 from "../../assets/images/resource/clients1-5.png";
import Client6 from "../../assets/images/resource/clients1-6.png";

const clientLogos = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client1,
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="inner-container">
        <div className="title-box">
          <div className="h6 title">
            Trusted By Leading Brands
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          className="brand-slider pb-0"
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}>
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="clients-box">
                <div className="clients-logo">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSection;