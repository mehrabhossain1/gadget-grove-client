import FlashSaleSection from "@/components/home/FlashSaleSection";
import HeroSection from "@/components/home/HeroSection";
import TopBrandsSection from "@/components/home/TopBrandsSection";
import TrendingProductsSection from "@/components/home/TrendingProductsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-[1250px] mx-auto">
        <FlashSaleSection />
        <TopBrandsSection />
        <TrendingProductsSection />
      </div>
    </div>
  );
};

export default HomePage;
