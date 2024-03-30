import ProductCard from "@/components/productCard/ProductCard";
import React from "react";

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`);
  const data = await res.json();

  const flashSaleProducts = data.filter(
    (product: any) => product.flashSale === true
  );
  //   console.log(flashSaleProducts);

  return (
    <div>
      <h2 className="text-3xl font-bold py-5">Flash Sale</h2>
      <ProductCard flashSaleProducts={flashSaleProducts} />
    </div>
  );
};

export default FlashSalePage;
