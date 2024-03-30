import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const Header = () => {
  return (
    <Navbar className="bg-[#00000099] text-white">
      <NavbarBrand>
        <p className="font-bold text-inherit">LaptopLagoon</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 text-white"
        justify="center"
      >
        <NavbarItem className="text-white">
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link href="/#">Brands</Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link href="/products">Products</Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link href="/flash-sale">Flash Sale</Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link href="/#">About Us</Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link href="/#">Contact Us</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
