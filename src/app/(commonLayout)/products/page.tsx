import AllProductsCard from "@/components/productCard/AllProductsCard";

const AllProductsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`);
  const allProducts = await res.json();

  return (
    <div className="max-w-[1250px] mx-auto px-2 text-center pb-10">
      <h2 className="text-[#3D3D3D] text-4xl font-bold pt-10">
        Our Collection Of <span className="text-red-400">Products</span>
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
