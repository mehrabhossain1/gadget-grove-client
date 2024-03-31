import FlashSaleSection from "@/components/home/FlashSaleSection";
import HeroSection from "@/components/home/HeroSection";
import TopBrandsSection from "@/components/home/TopBrandsSection";
import TrendingProductsSection from "@/components/home/TrendingProductsSection";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="max-w-[1250px] mx-auto px-2">
        <FlashSaleSection />
        <TopBrandsSection />
        <TrendingProductsSection />
      </div>
    </div>
  );
};

export default HomePage;
