/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button, Divider, Space } from "antd";
import Image from "next/image";
import { AllImages, allIcons } from "../../../public/assets/AllImages";
import Link from "next/link";
import ComingSoonModal from "../ui/ComingSoonModal";
import { useState } from "react";
import Container from "../ui/Container";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    // <footer className="w-full bg-white text-black py-16">
    <footer className="py-16 bg-section-color">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="mb-20 lg:mb-0 lg:w-2/3">
            <Image
              src={AllImages.logo}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[150px] md:w-[150px] lg:w-[180px]"
            />

            <div className="flex justify-start items-center gap-2">
              <Button
                onClick={() => {
                  showModal();
                }}
                className=" text-start gap-1 py-8  md:w-[200px] bg-section-color border-none rounded-xl"
              >
                <Image
                  src={allIcons.playstore}
                  alt="play_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px]"
                />
                <div>
                  <p className="text-xs text-base-color mb-1">
                    Download on the
                  </p>
                  <h4 className="text-base-color text-sm sm:text-lg md:text-xl">
                    Google Play
                  </h4>
                </div>
              </Button>
              <Button
                onClick={() => {
                  showModal();
                }}
                className=" text-start gap-1 py-8  md:w-[200px] bg-section-color border-none rounded-xl"
              >
                <Image
                  src={allIcons.appleStore}
                  alt="apple_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px]"
                />
                <div>
                  <p className="text-xs text-base-color mb-1">
                    Download on the
                  </p>
                  <h4 className="text-base-color text-sm sm:text-lg md:text-xl">
                    Apple Store
                  </h4>
                </div>
              </Button>
            </div>
          </div>
          <Divider
            type="vertical"
            style={{
              background: "linear-gradient(to right, #dd1122, #dd1122)",
              height: "350px",
              width: "4px",
            }}
            className="hidden lg:block rounded-lg ml-20"
          />
          <div className="lg:w-1/3 flex flex-col items-center justify-center ">
            <div>
              <p className="font-semibold text-base-color text-2xl mb-2 ">
                Follow us on
              </p>
              <div className="flex gap-4 mb-4">
                <div className="p-2 ml-12 rounded-full bg-[#121212]">
                  <Link href="" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={allIcons.insta}
                      alt="play_store"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-[24px] w-[24px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="text-base-color mt-11">
                <p className="font-semibold text-2xl">Email</p>
                <p className="md:text-lg lg:text-xl text-secondary-color"></p>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:px-4 ">
          <div className="border-t border-[#F3F3F3] mt-10"></div>
          <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center gap-5 mt-10">
            <Link href="/about-us">
              <p className="text-zinc-300 ">About Us</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-zinc-300 ">Privacy Policy</p>
            </Link>
            <Link href="/terms-of-use">
              <p className="text-zinc-300 ">Terms of Use</p>
            </Link>
          </div>
        </div>
      </Container>
      <ComingSoonModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        message={"Our Apps Will Be Available Soon."}
      />
    </footer>
    // </footer>
  );
}
