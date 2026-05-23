import React, { useState } from "react";
import Shape6 from "../../assets/images/icons/shape6.png";
import Shape7 from "../../assets/images/icons/shape7.png";

const pricingData = {
  monthly: [
    {
      tag: "Regular Plan",
      subtitle: "For Small Businesses",
      price: "$19.99",
      duration: "Monthly",
      priceTitle: "For Small Businesses",
      popular: false,
      active: false,
      features: [
        {
          text: "Email marketing",
          active: true,
        },
        {
          text: "Unlimited chat history",
          active: true,
        },
        {
          text: "Unlimited landing pages",
          active: true,
        },
        {
          text: "Automation templates",
          active: false,
        },
        {
          text: "Great Customer Support",
          active: false,
        },
      ],
    },

    {
      tag: "Standard Plan",
      subtitle: "For Medium Businesses",
      price: "$29.99",
      duration: "Monthly",
      priceTitle: "For Medium Businesses",
      popular: true,
      active: true,
      features: [
        {
          text: "Email marketing",
          active: true,
        },
        {
          text: "Unlimited chat history",
          active: true,
        },
        {
          text: "Unlimited landing pages",
          active: true,
        },
        {
          text: "Automation templates",
          active: true,
        },
        {
          text: "Great Customer Support",
          active: false,
        },
      ],
    },

    {
      tag: "Premium Plan",
      subtitle: "For Big Businesses",
      price: "$99.10",
      duration: "Monthly",
      priceTitle: "For Big Businesses",
      popular: false,
      active: false,
      features: [
        {
          text: "Email marketing",
          active: true,
        },
        {
          text: "Unlimited chat history",
          active: true,
        },
        {
          text: "Unlimited landing pages",
          active: true,
        },
        {
          text: "Automation templates",
          active: true,
        },
        {
          text: "Great Customer Support",
          active: true,
        },
      ],
    },
  ],

  yearly: [
    {
      tag: "Regular Plan",
      subtitle: "For Small Businesses",
      price: "$19.99",
      duration: "Yearly",
      priceTitle: "For Small Businesses",
      popular: false,
      active: false,
      features: [
        {
          text: "Email marketing",
          active: true,
        },
        {
          text: "Unlimited chat history",
          active: true,
        },
        {
          text: "Unlimited landing pages",
          active: true,
        },
        {
          text: "Automation templates",
          active: false,
        },
        {
          text: "Great Customer Support",
          active: false,
        },
      ],
    },

    {
      tag: "Standard Plan",
      subtitle: "For Medium Businesses",
      price: "$29.99",
      duration: "Yearly",
      priceTitle: "For Medium Businesses",
      popular: true,
      active: true,
      features: [
        {
          text: "Email marketing",
          active: true,
        },
        {
          text: "Unlimited chat history",
          active: true,
        },
        {
          text: "Unlimited landing pages",
          active: true,
        },
        {
          text: "Automation templates",
          active: true,
        },
        {
          text: "Great Customer Support",
          active: false,
        },
      ],
    },

    {
      tag: "Premium Plan",
      subtitle: "For Big Businesses",
      price: "$99.10",
      duration: "Yearly",
      priceTitle: "For Big Businesses",
      popular: false,
      active: false,
      features: [
        {
          text: "Email marketing",
          active: true,
        },
        {
          text: "Unlimited chat history",
          active: true,
        },
        {
          text: "Unlimited landing pages",
          active: true,
        },
        {
          text: "Automation templates",
          active: true,
        },
        {
          text: "Great Customer Support",
          active: true,
        },
      ],
    },
  ],
};

const PricingSection = () => {
  const [billingType, setBillingType] =
    useState("monthly");

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            Pricing plan
          </div>

          <h2 className="title text-reveal-anim">
            Secure the success of your
            <br />
            business journey…
          </h2>

          <div className="text">
            Business consulting is a
            dynamic and multifaceted field
            that plays a pivotal
            <br className="d-none d-md-block" />
            role in helping organizations
            thrive in today's competitive
            landscape.
          </div>
        </div>

        {/* Pricing Tabs */}
        <div className="d-flex justify-content-center mb-5">
          <div className="pricing-two__tab">
            <nav>
              <div
                className="nav nav-tabs"
                role="tablist"
              >
                {/* Monthly */}
                <button
                  type="button"
                  className={`nav-link ${
                    billingType ===
                    "monthly"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setBillingType(
                      "monthly"
                    )
                  }
                >
                  <span className="offer">
                    Save 40%
                    <img
                      src={Shape7}
                      alt="Shape"
                    />
                  </span>

                  Monthly
                </button>

                {/* Yearly */}
                <button
                  type="button"
                  className={`nav-link ${
                    billingType ===
                    "yearly"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setBillingType(
                      "yearly"
                    )
                  }>
                  Yearly
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          {pricingData[
            billingType
          ].map((plan, index) => (
            <div
              className="col-xl-4 col-md-6"
              key={index}>
              <div className="pricing-block">
                {plan.popular && (
                  <div className="h5 recommend">
                    Popular Package
                  </div>
                )}
                <div
                  className={`inner-block ${
                    plan.active
                      ? "active"
                      : ""
                  }`}>
                  <div className="shape bounce-x">
                    <img
                      src={Shape6}
                      alt="Shape"
                    />
                  </div>
                  <div className="tag">
                    {plan.tag}
                  </div>
                  <div className="text">
                    {plan.subtitle}
                  </div>
                  <ul className="list">
                    {plan.features.map(
                      (
                        feature,
                        featureIndex
                      ) => (
                        <li
                          key={
                            featureIndex
                          }
                          className={
                            !feature.active
                              ? "unactive"
                              : ""
                          }>
                          {
                            feature.text
                          }
                        </li>
                      )
                    )}
                  </ul>
                  <div className="price">
                    <span>
                      {plan.price}
                    </span>
                    / {plan.duration}
                  </div>
                  <div className="price-title">
                    {plan.priceTitle}
                  </div>
                  <button
                    type="button"
                    className="get-started">
                    <span className="button-text">
                      Choose Package
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;