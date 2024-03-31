import Image from "next/image";
import React from "react";

const SingleProductDetails = ({ product }: any) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
        <div className="mb-4">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <p className="text-lg font-semibold mb-2">
          Price: $<span className="text-red-400">{product.price}</span>
        </p>
        <p className="text-lg font-semibold mb-2">Ratings: {product.ratings}</p>
        <p className="text-lg font-semibold mb-2">Brand: {product.brand}</p>
        <p className="text-lg font-semibold mb-2">
          Description: {product.description}
        </p>
      </div>
    </div>
  );
};

export default SingleProductDetails;
