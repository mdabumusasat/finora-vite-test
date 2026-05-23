import React, { useState } from "react";

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

export default function FaqSection() {
  const [activeIndex1, setActiveIndex1] = useState(2);
  const [activeIndex2, setActiveIndex2] = useState(2);

  const toggleAccordion1 = (index) => {
    setActiveIndex1(activeIndex1 === index ? -1 : index);
  };

  const toggleAccordion2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? -1 : index);
  };

  return (
    <section className="faqs-section pt-120 pb-120">
      <div className="container">
        <div className="row g-4">

          {/* Accordion Style 1 */}
          <div className="col-lg-6">
            <div className="accordion-style1">
              <ul className="accordion-box denge-fade">
                {faqItems.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex1 === index ? "active-block" : ""
                    }`}
                  >
                    <div
                      className={`acc-btn ${
                        activeIndex1 === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion1(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.question}

                      <div
                        className={`icon ${
                          activeIndex1 === index
                            ? "fal fa-minus"
                            : "fal fa-plus"
                        }`}
                      ></div>
                    </div>

                    <div
                      className={`acc-content ${
                        activeIndex1 === index ? "current" : ""
                      }`}
                      style={{
                        display:
                          activeIndex1 === index ? "block" : "none",
                      }}
                    >
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accordion Style 2 */}
          <div className="col-lg-6">
            <div className="accordion-style2">
              <ul className="accordion-box denge-fade">
                {faqItems.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex2 === index ? "active-block" : ""
                    }`}
                  >
                    <div
                      className={`acc-btn ${
                        activeIndex2 === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion2(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.question}

                      <div
                        className={`icon ${
                          activeIndex2 === index
                            ? "fal fa-minus"
                            : "fal fa-plus"
                        }`}
                      ></div>
                    </div>

                    <div
                      className={`acc-content ${
                        activeIndex2 === index ? "current" : ""
                      }`}
                      style={{
                        display:
                          activeIndex2 === index ? "block" : "none",
                      }}
                    >
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}