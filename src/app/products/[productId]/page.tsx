import SingleProductDetails from "@/components/productCard/SingleProductDetails";
import React from "react";

const SingleProductPage = async ({ params }: any) => {
  console.log(params);
  const res = await fetch(
    `https://ass-8-azure.vercel.app/api/v1/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  console.log("product single ", product);
  return (
    <div>
      <SingleProductDetails product={product} />
    </div>
  );
};

export default SingleProductPage;
