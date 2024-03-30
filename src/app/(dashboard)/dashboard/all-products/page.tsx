import AllProductsCard from "@/components/productCard/AllProductsCard";
import React from "react";

const AllProductsDashboard = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`);
  const allProducts = await res.json();

  return (
    <div>
      There are {allProducts.length} products in this page
      <AllProductsCard allProducts={allProducts} />
    </div>
  );
};

export default AllProductsDashboard;
