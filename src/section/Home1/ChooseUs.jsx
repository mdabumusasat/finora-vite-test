import React, { useState } from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import WhyChooseImage from "../../assets/images/resource/why-choose1.jpg";
import Author1 from "../../assets/images/resource/author1.jpg";
import Author2 from "../../assets/images/resource/author2.jpg";
import Author3 from "../../assets/images/resource/author3.jpg";

const counters = [{ value: 98 }];

const accordionItems = [
  {
    title: "1. Instant transaction alerts",
    content:
      "Absolutely! We tailor every strategy and service package to meet your brand goals, audience, and budget.",
  },
  {
    title: "2. Regulatory compliant platform",
    content:
      "Absolutely! We tailor every strategy and service package to meet your brand goals, audience, and budget.",
  },
  {
    title: "3. 100% Transparent pricing",
    content:
      "Absolutely! We tailor every strategy and service package to meet your brand goals, audience, and budget.",
  },
  {
    title: "4. 24/7 customer support",
    content:
      "Absolutely! We tailor every strategy and service package to meet your brand goals, audience, and budget.",
  },
];

const customerImages = [Author1, Author2, Author3];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="sec-title mb-60">
          <div className="sub-title">Why Choose Us</div>
          <h2 className="title text-reveal-anim">
            Why Leading Businesses and Individuals
            <br className="d-none d-lg-block" />
            Trust Our Secure Financial Platform
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-10 mb-5 mb-xl-0">
            <div className="images-column">
              <div className="inner-column position-relative">
                <div className="image">
                  <img
                    src={WhyChooseImage}
                    alt="Why Choose Us"
                    className="img-fluid"
                  />
                </div>
                <div className="experience-four">
                  <div className="image-box">
                    {customerImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Customer ${index + 1}`}
                      />
                    ))}
                    <i className="icon fa-solid fa-plus"></i>
                  </div>
                  <div className="h5 expe-text">
                    223K+ Customers
                  </div>
                  <div className="count-info">
                    <div className="count-box two">
                      <CounterUp end={counters[0].value} />
                      <span>%</span>
                    </div>
                    <div className="h5 count-title">
                      We have 19k+
                      <br />
                      Customers World-wide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-10">
            <div className="content-column">
              <div className="text">
                It is a long established fact that a reader will
                be distracted by the readable content of a page
                when looking at its layout. It is a long
                established fact that a reader will be distracted.
              </div>
              <div className="why-choose-accordion mb-4">
                <ul className="accordion-box list-unstyled">
                  {accordionItems.map((item, index) => (
                    <li
                      key={index}
                      className={`accordion block ${
                        activeIndex === index
                          ? "active-block"
                          : ""
                      }`}>
                      <div
                        className={`acc-btn ${
                          activeIndex === index
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          toggleAccordion(index)
                        }
                        style={{ cursor: "pointer" }}>
                        {item.title}

                        <div
                          className={`icon ${
                            activeIndex === index
                              ? "fal fa-minus"
                              : "fal fa-plus"
                          }`}
                        ></div>
                      </div>
                      <div
                        className="acc-content"
                        style={{
                          display:
                            activeIndex === index
                              ? "block"
                              : "none",
                        }}>
                        <div className="content">
                          <div className="text">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text">
                It is a long established fact that a reader will
                be distracted by the readable content of a page
                when looking at its layout. It is a long
                established fact that a reader will be distracted.
              </div>
              <Link
                to="/page-about"
                className="btn-style-one">
                <span className="left-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
                <span className="btn-title">
                  Discover More
                </span>
                <span className="right-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;