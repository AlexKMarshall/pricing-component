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
  </>
);

export default IndexPage;
