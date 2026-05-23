import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import clientImg1 from "../../assets/images/resource/clients1-1.png";
import clientImg2 from "../../assets/images/resource/clients1-2.png";
import clientImg3 from "../../assets/images/resource/clients1-3.png";
import clientImg4 from "../../assets/images/resource/clients1-4.png";
import clientImg5 from "../../assets/images/resource/clients1-5.png";
import clientImg6 from "../../assets/images/resource/clients1-6.png";

const clientLogos = [
  clientImg1,
  clientImg2,
  clientImg3,
  clientImg4,
  clientImg5,
  clientImg6,
  clientImg1,
];

export default function ClientsSectionTwo() {
  return (
    <section className="clients-section">
      <div className="inner-container">
        <div className="title-box">
          <div className="h6 title">Trusted By Leading Brands</div>
        </div>
        <Swiper
          modules={[Autoplay]}
          className="brand-slider pb-0"
          slidesPerView={2}
          spaceBetween={0}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}>
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="clients-box-two">
                <div className="clients-logo">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    style={{ objectFit: "contain" }}
                    priority={index < 3}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}