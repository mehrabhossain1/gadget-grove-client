import AllProductsTable from "@/components/dashboard/AllProductsTable";

const AllProductsDashboard = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`, {
    cache: "no-store",
  });
  const allProducts = await res.json();
  // console.log(allProducts);

  return (
    <div className="py-10">
      There are {allProducts.length}{" "}
      <span className="text-red-400">products</span> in this page
      <AllProductsTable allProducts={allProducts} />
    </div>
  );
};

export default AllProductsDashboard;
