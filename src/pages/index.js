import React, { useState } from "react";

import SEO from "../components/seo";

const IndexPage = () => {
  const [billingFrequency, setBillingFrequency] = useState("monthly");

  const handleOptionChange = (event) => {
    setBillingFrequency(event.target.value);
  };

  return (
    <>
      <SEO title="Home" />
      <h1 className="text-3nHalfxl tracking-wide mt-20">Our Pricing</h1>
      <input
        type="radio"
        name="billing-frequency"
        id="annually"
        checked={billingFrequency === "annually"}
        onChange={handleOptionChange}
        value="annually"
      />
      <label htmlFor="annually">Annually</label>
      <input
        type="radio"
        name="billing-frequency"
        id="monthly"
        checked={billingFrequency === "monthly"}
        onChange={handleOptionChange}
        value="monthly"
      />
      <label htmlFor="monthly">Monthly</label>
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
      />
      <PricingTier
        tierName="Master"
        monthlyRate={getPrice("master", billingFrequency)}
        storage="2 TB"
        users="10"
        transferLimit="20 GB"
      />
    </>
  );

  function PricingTier({
    tierName,
    monthlyRate,
    storage,
    users,
    transferLimit,
  }) {
    return (
      <>
        <h2 className="text-xl">{tierName}</h2>
        <div className="text-7xl">
          <span className="text-5xl">$</span>
          {monthlyRate}
        </div>
        <ul>
          <li>{storage} Storage</li>
          <li>{users} Users Allowed</li>
          <li>Send up to {transferLimit}</li>
        </ul>
        <button>Learn more</button>
      </>
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
