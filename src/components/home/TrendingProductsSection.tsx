import React from "react";
import Button from "../button/Button";
import TrendingProductsCard from "../productCard/TrendingProductsCard";
import Link from "next/link";

const TrendingProductsSection = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  const sortedProducts = data.sort((a: any, b: any) => b.rating - a.rating);

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h2 className="text-[#3D3D3D] text-4xl font-bold">
            Most <span className="text-red-400">Popular</span> Products
          </h2>
          <p className="pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina.
          </p>
        </div>
        <Link href="/products">
          <Button>See All Products</Button>
        </Link>
      </div>
      <div className="py-20">
        <TrendingProductsCard sortedProducts={sortedProducts} />
      </div>
    </div>
  );
};

export default TrendingProductsSection;
