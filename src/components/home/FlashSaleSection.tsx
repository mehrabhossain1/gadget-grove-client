import React from "react";
import Button from "../button/Button";
import ProductCard from "../productCard/ProductCard";

const FlashSaleSection = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <h2 className="text-[#3D3D3D] text-4xl font-bold">Flash Sale</h2>
        <Button>View All</Button>
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default FlashSaleSection;
