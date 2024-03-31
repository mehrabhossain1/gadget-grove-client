import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/5 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <Link href="/dashboard/all-products">All Products</Link>
          </li>
        </ul>
      </div>
      <div className="w-4/5 p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
