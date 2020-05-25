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
      <SEO title="Home" />
      <div className="w-full min-h-screen bg-gray-blue-very-light">
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
              className={`track w-16 h-8 mx-6 rounded-full bg-gradient-right cursor-pointer`}
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
          <PricingTier
            tierName="Basic"
            monthlyRate={getPrice("basic", billingFrequency)}
            storage="500 GB"
            users="2"
            transferLimit="3 GB"
          />
          <PricingTier
            tierName="Professional"
            monthlyRate={getPrice("professional", billingFrequency)}
            storage="1 TB"
            users="5"
            transferLimit="10 GB"
            highlighted={true}
          />
          <PricingTier
            tierName="Master"
            monthlyRate={getPrice("master", billingFrequency)}
            storage="2 TB"
            users="10"
            transferLimit="20 GB"
            className="mb-0"
          />
        </div>
      </div>
    </>
  );

  function PricingTier({
    tierName,
    monthlyRate,
    storage,
    users,
    transferLimit,
    highlighted,
  }) {
    const normalColors = {
      bg: "white",
      text: "current",
      boldText: "gray-blue-dark",
      divider: "gray-blue-light",
      button: "gradient-right",
      buttonText: { normal: "white", hover: "highlight" },
    };

    const highlightedColors = {
      bg: "gradient-bottom-right",
      text: "white",
      boldText: "white",
      divider: "white",
      button: "white",
      buttonText: { normal: "highlight", hover: "white" },
    };

    const colors = highlighted ? highlightedColors : normalColors;

    return (
      <div
        className={`mx-6 mb-8 last:mb-20 p-8 rounded-xl bg-${colors.bg} text-${colors.text} shadow-md`}
      >
        <h2 className="text-xl mb-6">{tierName}</h2>
        <div className={`text-7xl leading-none mb-6 text-${colors.boldText}`}>
          <span className="text-5xl">$</span>
          {monthlyRate}
        </div>
        <ul
          className={`border-t border-b divide-y border-${colors.divider} divide-${colors.divider} border-opacity-75 divide-opacity-75 mb-8`}
        >
          <li className="py-4">{storage} Storage</li>
          <li className="py-4">{users} Users Allowed</li>
          <li className="py-4">Send up to {transferLimit}</li>
        </ul>
        <button
          className={`w-full p-4 uppercase rounded-md 
          text-${colors.buttonText.normal} hover:text-${colors.buttonText.hover} focus:text-${colors.buttonText.hover} 
          bg-${colors.button} hover:bg-none focus:bg-none
          border-2 border-transparent hover:border-${colors.divider} focus:border-${colors.divider} focus:outline-none`}
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
