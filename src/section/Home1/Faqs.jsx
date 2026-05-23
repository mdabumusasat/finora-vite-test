import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaqBg from "../../assets/images/background/2.png";
import Shape4 from "../../assets/images/icons/shape4.png";
import FaqImage from "../../assets/images/resource/faq1.jpg";

const faqItems = [
  {
    question: "Is my money safe on your platform?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is.",
  },
  {
    question: "How long do transfers take?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is.",
  },
  {
    question: "What security measures do you use?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is.",
  },
  {
    question: "Can businesses use this platform?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is.",
  },
  {
    question: "Is customer support available 24/7?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faqs-section p-0">
      <div className="inner-container position-relative">
        {/* Background Image */}
        <div className="bg-image bg">
          <img
            src={FaqBg}
            alt="Background"
            className="object-cover w-100"
          />
        </div>

        <div className="container position-relative">
          {/* Section Title */}
          <div className="sec-title text-center mb-60">
            <div className="sub-title">FAQ</div>

            <h2 className="title text-reveal-anim">
              Your Most Important Questions
              <br className="d-none d-lg-block" />
              Answered Here
            </h2>
          </div>

          <div className="row align-items-center">
            {/* FAQ Accordion */}
            <div className="col-xl-6 mb-5 mb-xl-0">
              <div className="accordion-style1">
                <ul className="accordion-box list-unstyled">
                  {faqItems.map((item, index) => (
                    <li
                      key={index}
                      className={`accordion block ${
                        activeIndex === index
                          ? "active-block"
                          : ""
                      }`}
                    >
                      {/* Accordion Button */}
                      <div
                        className={`acc-btn ${
                          activeIndex === index
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          toggleAccordion(index)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {item.question}

                        <div
                          className={`icon ${
                            activeIndex === index
                              ? "fal fa-minus"
                              : "fal fa-plus"
                          }`}
                        ></div>
                      </div>

                      {/* Accordion Content */}
                      <div
                        className={`acc-content ${
                          activeIndex === index
                            ? "current"
                            : ""
                        }`}
                        style={{
                          display:
                            activeIndex === index
                              ? "block"
                              : "none",
                        }}
                      >
                        <div className="content">
                          <div className="text">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-xl-6">
              <div className="images-column">
                <div className="inner-column position-relative">
                  {/* Shape */}
                  <div className="shape1 bounce-x">
                    <img
                      src={Shape4}
                      alt="Shape"
                    />
                  </div>

                  {/* Main Image */}
                  <div className="image">
                    <img
                      src={FaqImage}
                      alt="FAQ"
                      className="img-fluid"
                    />
                  </div>

                  {/* Content Box */}
                  <div className="content-box">
                    <h3 className="title">
                      Have Any Question on Your Minds?
                    </h3>

                    <Link
                      to="/page-contact"
                      className="btn-style-one"
                    >
                      <span className="left-arrow">
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </span>

                      <span className="btn-title">
                        Send Mail
                      </span>

                      <span className="right-arrow">
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;