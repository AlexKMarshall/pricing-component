import React, { useState } from "react";

import SEO from "../components/seo";

const IndexPage = () => {
  const [billingFrequency, setBillingFrequency] = useState("monthly");

  const handleOptionChange = (event) => {
    setBillingFrequency(event.target.value);
  };

  const toggleFrequency = () => {
    setBillingFrequency((prev) =>
      prev === "annually" ? "monthly" : "annually"
    );
  };

  return (
    <>
      <SEO title="Pricing" />
      <div className="w-full min-h-screen bg-pattern-top lg:bg-pattern-both">
        <div className="container mx-auto flex flex-col items-stretch text-center text-gray-blue">
          <h1 className="text-3nHalfxl tracking-wide mt-20 mb-12">
            Our Pricing
          </h1>
          <form className="flex justify-center items-center mb-20 text-gray-blue-light">
            <label htmlFor="annually">Annually</label>
            <input
              className="hidden"
              type="radio"
              name="billing-frequency"
              id="annually"
              checked={billingFrequency === "annually"}
              onChange={handleOptionChange}
              value="annually"
            />
            <div
              className={`track w-16 h-8 mx-6 rounded-full bg-gradient-right bg-transparent
               hover:bg-white hover:bg-opacity-50 cursor-pointer
               transition-colors duration-300 ease-in-out`}
              style={{ backgroundBlendMode: "screen" }}
              onClick={toggleFrequency}
              aria-hidden={true}
            >
              <div
                className={`slider w-8 h-8 rounded-full bg-white transform scale-90
               ${billingFrequency === "monthly" ? "translate-x-8" : ""}
               transition-transform duration-300 ease-in-out`}
              ></div>
            </div>
            <input
              className="hidden"
              type="radio"
              name="billing-frequency"
              id="monthly"
              checked={billingFrequency === "monthly"}
              onChange={handleOptionChange}
              value="monthly"
            />
            <label htmlFor="monthly">Monthly</label>
          </form>
          <div
            className={`mx-6 mb-20 space-y-8 flex flex-col
              lg:flex-row lg:space-y-0 lg:justify-center lg:items-center`}
          >
            <PricingTierStandard
              tierName="Basic"
              monthlyRate={getPrice("basic", billingFrequency)}
              storage="500 GB"
              users="2"
              transferLimit="3 GB"
            />
            <PricingTierHighlight
              tierName="Professional"
              monthlyRate={getPrice("professional", billingFrequency)}
              storage="1 TB"
              users="5"
              transferLimit="10 GB"
            />
            <PricingTierStandard
              tierName="Master"
              monthlyRate={getPrice("master", billingFrequency)}
              storage="2 TB"
              users="10"
              transferLimit="20 GB"
              className="mb-0"
            />
          </div>
          <footer className="mb-4">
            <div>
              Challenge by{" "}
              <a
                className="text-highlight underline"
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a
                className="text-highlight underline"
                href="https://github.com/AlexKMarshall"
              >
                Alex Marshall
              </a>
              .
            </div>
          </footer>
        </div>
      </div>
    </>
  );

  function PricingTierHighlight({
    tierName,
    monthlyRate,
    storage,
    users,
    transferLimit,
  }) {
    return (
      <div
        className={`p-8 py-16 rounded-xl bg-gradient-bottom-right text-white shadow-md`}
        style={{ minWidth: "23rem" }} // so content doesn't shrink and grow when changing between prices
      >
        <h2 className="text-xl mb-6">{tierName}</h2>
        <div
          className={`text-7xl leading-none mb-6 text-white flex flex-row justify-center items-center`}
        >
          <span className="text-5xl">$</span>
          {monthlyRate}
        </div>
        <ul
          className={`border-t border-b divide-y border-white divide-white border-opacity-75 divide-opacity-75 mb-8`}
        >
          <li className="py-4">{storage} Storage</li>
          <li className="py-4">{users} Users Allowed</li>
          <li className="py-4">Send up to {transferLimit}</li>
        </ul>
        <button
          className={`w-full p-4 uppercase rounded-md 
          text-highlight hover:text-white focus:text-white 
          bg-white hover:bg-none focus:bg-none
          border-2 border-transparent hover:border-white focus:border-white focus:outline-none
          transition-colors duration-300 ease-in-out`}
          style={{ backgroundSize: "110%", backgroundPositionX: "-2px" }} //Style hack to deal with transparent borders on gradient with border-radius
        >
          Learn more
        </button>
      </div>
    );
  }

  function PricingTierStandard({
    tierName,
    monthlyRate,
    storage,
    users,
    transferLimit,
  }) {
    return (
      <div
        className={`p-8 py-8 rounded-xl bg-white text-current shadow-md`}
        style={{ minWidth: "23rem" }} // so content doesn't shrink and grow when changing between prices
      >
        <h2 className="text-xl mb-6">{tierName}</h2>
        <div
          className={`text-7xl leading-none mb-6 text-gray-blue-dark flex flex-row justify-center items-center`}
        >
          <span className="text-5xl">$</span>
          {monthlyRate}
        </div>
        <ul
          className={`border-t border-b divide-y border-gray-blue-light divide-gray-blue-light border-opacity-75 divide-opacity-75 mb-8`}
        >
          <li className="py-4">{storage} Storage</li>
          <li className="py-4">{users} Users Allowed</li>
          <li className="py-4">Send up to {transferLimit}</li>
        </ul>
        <button
          className={`w-full p-4 uppercase rounded-md 
          text-white hover:text-highlight focus:text-highlight
          bg-gradient-right hover:bg-none focus:bg-none
          border-2 border-transparent hover:border-gray-blue-light focus:border-gray-blue-light focus:outline-none
          transition-colors duration-300 ease-in-out`}
          style={{ backgroundSize: "110%", backgroundPositionX: "-2px" }} //Style hack to deal with transparent borders on gradient with border-radius
        >
          Learn more
        </button>
      </div>
    );
  }
};

function getPrice(pricingTier, billingFrequency) {
  const priceList = {
    basic: { monthly: "19.99", annually: "199.99" },
    professional: { monthly: "24.99", annually: "249.99" },
    master: { monthly: "39.99", annually: "399.99" },
  };

  return priceList[pricingTier][billingFrequency];
}

export default IndexPage;
