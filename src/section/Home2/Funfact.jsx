import React from "react";
import CounterUp from "../../lib/CounterUp";
import FunfactImg from "../../assets/images/background/5.jpg";

const funfacts = [
  {
    title: "Verified Users",
    value: 9.1,
    suffix: "M+",
  },
  {
    title: "Countries Supported",
    value: 150,
    suffix: "+",
  },
  {
    title: "Customer Rating",
    value: 4.9,
    suffix: "/5",
  },
];

export default function FunfactSectionTwo() {
  return (
    <section className="funfact-section-two">
      <div className="inner-container">
        <div className="bg-image bg tm-gsap-img-parallax">
          <img
            src={FunfactImg}
            alt="Background"
            className="object-cover"/>
        </div>
        <div className="container">
          <div className="row g-4 g-lg-24">
            {funfacts.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-md-6">
                <div className="funfact-block-two">
                  <div className="inner-block">
                    <div className="h6 title">{item.title}</div>
                    <div className="count-box">
                      <span className="count-text">
                        <CounterUp end={item.value} />
                      </span>
                      {item.suffix}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}