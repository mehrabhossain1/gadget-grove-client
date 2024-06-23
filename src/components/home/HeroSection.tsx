import SwiperCarousel from "../swiperCarousel/SwiperCarousel";

const HeroSection = () => {
  return (
    <div className=" bg-[#00000099] text-white">
      <div className="max-w-[1250px] mx-auto">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl font-bold pt-20 leading-tight">
            Crafting <span className="text-red-400">Comfort</span>, Redefining
            Spaces. <br /> Your Home, Your{" "}
            <span className="text-red-400">Signature</span> Style!
          </h1>
          <p className="text-base font-normal pt-10 md:w-4/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla fringilla nunc in molestie feugiat
          </p>
        </div>

        <div className="py-10">
          <h1>Hello carousel</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
