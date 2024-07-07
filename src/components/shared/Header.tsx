"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.jpg";
import Image from "next/image";

export default function App() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const currentPath = usePathname();

  // const menuItems = [
  //   "Home",
  //   "Categories",
  //   "Products",
  //   "Flash Sale",
  //   "About Us",
  //   "Contact Us",
  // ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className=" mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-semibold">
              My Website
            </a>
          </div>
          <div className="hidden md:block">
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
