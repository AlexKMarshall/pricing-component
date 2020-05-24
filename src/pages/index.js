import React from "react";

import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Our Pricing</h1>
    <input
      type="radio"
      name="billing-frequency"
      id="annually"
      value="annually"
    />
    <label htmlFor="annually">Annually</label>
    <input type="radio" name="billing-frequency" id="monthly" value="monthly" />
    <label htmlFor="monthly">Monthly</label>
    <PricingTier
      tierName="Basic"
      monthlyRate={getPrice("basic", "monthly")}
      storage="500 GB"
      users="2"
      transferLimit="3 GB"
    />
    <PricingTier
      tierName="Professional"
      monthlyRate={getPrice("professional", "monthly")}
      storage="1 TB"
      users="5"
      transferLimit="10 GB"
    />
    <PricingTier
      tierName="Master"
      monthlyRate={getPrice("master", "monthly")}
      storage="2 TB"
      users="10"
      transferLimit="20 GB"
    />
  </>
);

function PricingTier({ tierName, monthlyRate, storage, users, transferLimit }) {
  return (
    <>
      <h2>{tierName}</h2>
      <div>${monthlyRate}</div>
      <ul>
        <li>{storage} Storage</li>
        <li>{users} Users Allowed</li>
        <li>Send up to {transferLimit}</li>
      </ul>
      <button>Learn more</button>
    </>
  );
}

function getPrice(pricingTier, billingFrequency) {
  const priceList = {
    basic: { monthly: "19.99", annually: "199.99" },
    professional: { monthly: "24.99", annually: "249.99" },
    master: { monthly: "39.99", annually: "399.99" },
  };

  return priceList[pricingTier][billingFrequency];
}

export default IndexPage;
