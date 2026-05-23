import React from "react";
import CounterUp from "../../lib/CounterUp";
import FunfactIcon1 from "../../assets/images/icons/funfact1-1.png";
import FunfactIcon2 from "../../assets/images/icons/funfact1-2.png";
import FunfactIcon3 from "../../assets/images/icons/funfact1-3.png";
import FunfactIcon4 from "../../assets/images/icons/funfact1-4.png";

const counters = [
  { value: 2.5 },
  { value: 98 },
  { value: 150 },
  { value: 4.5 },
];

const funfactData = [
  {
    icon: FunfactIcon1,
    value: counters[0].value,
    suffix: "M+",
    title: "Verified Users",
    alt: "Verified Users",
  },
  {
    icon: FunfactIcon2,
    value: counters[1].value,
    suffix: "%",
    title: "Customer Retention Rate",
    alt: "Customer Retention Rate",
  },
  {
    icon: FunfactIcon3,
    value: counters[2].value,
    suffix: "+",
    title: "Countries Supported",
    alt: "Countries Supported",
  },
  {
    icon: FunfactIcon4,
    value: counters[3].value,
    suffix: "/5",
    title: "Customer Rating",
    alt: "Customer Rating",
  },
];

const FunfactSection = () => {
  return (
    <section className="funfact-section pt-0">
      <div className="container">
        <div className="funfact-outer">
          {funfactData.map((item, index) => (
            <div className="funfact-block" key={index}>
              <div className="inner-block">
                {/* Icon */}
                <div className="icon">
                  <img
                    src={item.icon}
                    alt={item.alt}
                  />
                </div>

                {/* Counter */}
                <div className="count-box">
                  <CounterUp end={item.value} />
                  {item.suffix}
                </div>

                {/* Title */}
                <div className="h5 title">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunfactSection;