import AllProductsCard from "@/components/productCard/AllProductsCard";
import React from "react";

const AllProductsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`);
  const allProducts = await res.json();

  return (
    <div className="max-w-[1250px] mx-auto">
      <h2 className="text-[#3D3D3D] text-4xl font-bold pt-10">
        Our Collection Of Products
      </h2>
      <p className="">Showing {allProducts.length} items</p>
      <p className="pt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="pt-20">
        <AllProductsCard allProducts={allProducts} />
      </div>
    </div>
  );
};

export default AllProductsPage;
