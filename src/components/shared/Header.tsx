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
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentPath = usePathname();

  const menuItems = [
    "Home",
    "Categories",
    "Products",
    "Flash Sale",
    "About Us",
    "Contact Us",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className={
              currentPath === "/"
                ? "text-red-400 font-semibold"
                : "text-slate-600"
            }
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/categories"
            className={
              currentPath === "/categories"
                ? "text-red-400 font-semibold"
                : "text-slate-600"
            }
          >
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/products"
            className={
              currentPath === "/products"
                ? "text-red-400 font-semibold"
                : "text-slate-600"
            }
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/flash-sale"
            className={
              currentPath === "/flash-sale"
                ? "text-red-400 font-semibold"
                : "text-slate-600"
            }
          >
            Flash Sale
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about-us"
            className={
              currentPath === "/about-us"
                ? "text-red-400 font-semibold"
                : "text-slate-600"
            }
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/contact-us"
            className={
              currentPath === "/contact-us"
                ? "text-red-400 font-semibold"
                : "text-slate-600"
            }
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
