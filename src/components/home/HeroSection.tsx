import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../emblaCarousel/embla.css";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HeroSection = () => {
  return (
    <div className=" bg-[#00000099] text-white">
      <div className="max-w-[1250px] mx-auto">
        <div className="w-2/3 mx-auto text-center">
          <h1 className="text-5xl font-bold pt-20 leading-tight">
            Crafting Comfort, Redefining Spaces. Your Home, Your Signature
            Style!
          </h1>
          <p className="text-base font-normal pt-10 md:w-4/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla fringilla nunc in molestie feugiat
          </p>
        </div>

        <div className="py-10">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
