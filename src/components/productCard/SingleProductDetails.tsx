import React from "react";

const SingleProductDetails = ({ product }: any) => {
  return (
    <div>
      <h1>{product.title}</h1>
      {/* <div>
            {product.images.map((image, index) => (
                <img key={index} src={image} alt={`Product Image ${index + 1}`} />
            ))}
        </div> */}
      <p>Price: ${product.price}</p>
      <p>Ratings: {product.ratings}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default SingleProductDetails;
