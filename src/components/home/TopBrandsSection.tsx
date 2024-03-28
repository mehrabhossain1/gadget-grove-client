import React from "react";
import TopBrandsCard from "../productCard/TopBrandsCard";

const TopBrandsSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">Top Brands</h2>
      <p className="pt-3">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
      </p>

      <div className="pt-16">
        <TopBrandsCard />
      </div>
    </div>
  );
};

export default TopBrandsSection;
