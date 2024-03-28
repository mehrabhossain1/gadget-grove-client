import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <nav className="flex flex-wrap justify-center">
          <Link href="/trending">
            <p className="mr-6 hover:text-gray-300">Trending Products</p>
          </Link>
          <Link href="/categories">
            <p className="mr-6 hover:text-gray-300">Categories/Brands</p>
          </Link>
          <Link href="/about">
            <p className="mr-6 hover:text-gray-300">About Us</p>
          </Link>
          <Link href="/contact">
            <p className="mr-6 hover:text-gray-300">Contact Us</p>
          </Link>
          <Link href="/customer-care">
            <p className="hover:text-gray-300">Customer Care</p>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
