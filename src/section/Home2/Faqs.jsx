import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaqsImg1 from "../../assets/images/icons/shape9.png";
import FaqsImg2 from "../../assets/images/resource/faq2.jpg";

const faqItems = [
  {
    question: "Is my money safe on your platform?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    question: "How long do transfers take?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    question: "What security measures do you use?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    question: "Can businesses use this platform?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    question: "Is customer support available 24/7?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
];

export default function FaqSectionTwo() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faqs-section-two p-0">
      <div className="inner-container pb-0">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">FAQ</div>
            <div className="h2 title text-reveal-anim">
              Your Most Important Questions
              <br className="d-none d-lg-block" />
              Answered Here
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="accordion-style2">
                <ul className="accordion-box">
                  {faqItems.map((item, index) => (
                    <li
                      key={index}
                      className={`accordion block ${
                        activeIndex === index ? "active-block" : ""
                      }`}>
                      <div
                        className={`acc-btn ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(index)}>
                        {item.question}
                        <div
                          className={`icon ${
                            activeIndex === index ? "fal fa-minus" : "fal fa-plus"
                          }`}
                        ></div>
                      </div>
                      <div
                        className="acc-content"
                        style={{
                          display:
                            activeIndex === index ? "block" : "none",
                        }}>
                        <div className="content">
                          <div className="text">{item.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="images-column">
                <div className="inner-column">
                  <div className="shape1 bounce-x">
                    <img
                      src={FaqsImg1}
                      alt="shape"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={FaqsImg2}
                      alt="faq"
                    />
                  </div>
                  <div className="content-box">
                    <div className="h3 title">
                      Have Any Question on Your Mind?
                    </div>
                    <Link to="/page-contact" className="btn-style-one">
                      <span className="left-arrow">
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </span>
                      <span className="btn-title">Send Mail</span>
                      <span className="right-arrow">
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}