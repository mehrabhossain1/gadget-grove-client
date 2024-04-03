import ProductCard from "@/components/productCard/ProductCard";

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  const flashSaleProducts = data.filter(
    (product: any) => product.flashSale === true
  );
  //   console.log(flashSaleProducts);

  return (
    <div className="max-w-[1250px] mx-auto px-2 pb-10">
      <h2 className="text-3xl font-bold py-5">
        <span className=" text-red-400">Flash</span> Sale
      </h2>
      <ProductCard flashSaleProducts={flashSaleProducts} />
    </div>
  );
};

export default FlashSalePage;
