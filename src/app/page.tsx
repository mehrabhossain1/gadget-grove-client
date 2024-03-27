import FlashSaleSection from "@/components/home/FlashSaleSection";
import HeroSection from "@/components/home/HeroSection";
import { Button } from "@nextui-org/react";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSaleSection />
    </div>
  );
};

export default HomePage;
