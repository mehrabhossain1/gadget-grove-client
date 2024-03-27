import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../emblaCarousel/embla.css";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HeroSection = () => {
  return (
    <div className=" bg-[#00000099]">
      <div className="w-2/3 mx-auto ">
        <h1 className="text-5xl font-bold py-10">
          Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!
        </h1>
        <p className="text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis
          pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla fringilla nunc in molestie feugiat
        </p>
      </div>

      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default HeroSection;
