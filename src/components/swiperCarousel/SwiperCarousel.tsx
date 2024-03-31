"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const SwiperCarousel = () => {
  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 1"
          width={600}
          height={600}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1636211993589-6daf32038bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 2"
          width={600}
          height={600}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1522206052224-9c5ad951dd74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 3"
          width={600}
          height={600}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 4"
          width={600}
          height={600}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 5"
          width={600}
          height={600}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1522205940279-d75807ebcd91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 6"
          width={600}
          height={600}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;
