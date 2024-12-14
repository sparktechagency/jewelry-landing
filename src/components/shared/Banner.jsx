"use client";

import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";

import { Swiper, SwiperSlide } from "swiper/react";
import { FiExternalLink } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Button } from "antd";

export default function Banner() {
  return (
    <section className="relative h-screen flex items-center justify-center ">
      <Swiper
        spaceBetween={0}
        draggable={false}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-screen w-full "
      >
        <SwiperSlide>
          <Image
            src={AllImages.banner1}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={AllImages.banner2}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={AllImages.banner3}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={AllImages.banner4}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute w-full h-screen z-10 text-base-color text-center flex justify-center items-center">
        <div>
          <h1 className="lg:text-7l md:text-6xl sm:text-5xl text-3xl font-semibold ">
            Find the Perfect Jewelry Boxes <br /> for Your Business
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 mt-12 ">
            <Link
              href="https://wholesale-zakeeboxes.vercel.app/"
              target="_blank"
            >
              <button
                // icon={<FiExternalLink className="size-5" />}
                prefix={<FiExternalLink className="size-5" />}
                type="primary"
                className="flex  justify-center items-center gap-2 w-40 sm:w-60 py-2 text-lg sm:text-xl md:text-2xl bg-secondary-color border border-secondary-color text-primary-color font-semibold rounded-xl shadow-none"
              >
                Wholesale
                <FiExternalLink className="size-5" />
              </button>
            </Link>
            <Link href="" target="_blank">
              <button
                // icon={<FiExternalLink className="size-5" />}
                type="primary"
                className="flex  justify-center items-center gap-2 w-40 sm:w-60 py-2 text-lg sm:text-xl md:text-2xl bg-secondary-color border border-secondary-color text-primary-color font-semibold rounded-xl shadow-none"
              >
                Retail
                <FiExternalLink className="size-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
