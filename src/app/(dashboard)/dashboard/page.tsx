import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <h2>This is dashboard</h2>
      <Link href="/dashboard/all-products">All Products</Link>
    </div>
  );
};

export default Dashboard;
