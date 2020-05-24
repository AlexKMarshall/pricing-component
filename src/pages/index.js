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
    <h2>Basic</h2>
    <div>$19.99</div>
    <ul>
      <li>500 GB Storage</li>
      <li>2 Users Allowed</li>
      <li>Send up to 3 GB</li>
    </ul>
    <button>Learn more</button>
    <h2>Professional</h2>
    <div>$24.99</div>
    <ul>
      <li>1 TB Storage</li>
      <li>5 Users Allowed</li>
      <li>Send up to 10 GB</li>
    </ul>
    <button>Learn more</button>
  </>
);

export default IndexPage;
