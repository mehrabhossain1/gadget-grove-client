import SingleProductDetails from "@/components/productCard/SingleProductDetails";
import React from "react";

const SingleProductPage = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params._id}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  console.log("blog single ", product);
  return (
    <div>
      <SingleProductDetails product={product} />
    </div>
  );
};

export default SingleProductPage;
