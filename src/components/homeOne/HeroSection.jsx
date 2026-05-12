"use client";

import RotatingBadge from "../ui/RotatingBadge";
import Container from "../ui/Container";
import HeroCard from "../ui/HeroCard";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import { heroSections } from "../helper/homeOnehelper";
import { useCallback, useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const { heroBanner } = allImages;
  const [bannerID, setBannerID] = useState(0);
  const intervalRef = useRef(null);

  // useCallback — stale closure off
  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setBannerID((prev) => (prev + 1) % heroBanner.length);
    }, 5000);
  }, [heroBanner.length]);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoPlay]);

  const handleBannerClick = (id) => {
    setBannerID(id);
    startAutoPlay();
  };

  return (
    <section className="pt-[140px] lg:pt-[180px] pb-[90px]">
      <Container size="2xl">
        {/* ektai h1 — responsive class diye handle */}
        <div className="relative">
          <h1 className="font-heading headingOne uppercase tracking-tight">
            {/* Desktop */}
            <span className="hidden lg:flex items-center font-extrabold">
              Business <RotatingBadge size="lg" />
            </span>
            {/* Mobile/Tablet */}
            <span className="flex lg:hidden flex-col items-center gap-y-2 font-extrabold">
              Business
              <RotatingBadge size="sm" />
            </span>
            <span className="block font-medium lg:pl-[360px] xl:pl-[470px] 2xl:pl-[520px] text-center lg:text-left">
              Strategy
            </span>
          </h1>

          {/* Mobile HeroCard */}
          <div className="mt-12 flex justify-center lg:hidden">
            <HeroCard />
          </div>
        </div>
      </Container>

      {/* Banner */}
      <div className="mt-[50px] lg:mt-[90px] mb-[20px] px-3 max-w-[1880px] h-[320px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[600px] 2xl:h-[650px] relative mx-2">
        {/* blur korano — performance er jonno */}
        {heroBanner.map((banner, index) => (
          <div
            key={index}
            aria-hidden={index !== bannerID}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out
              ${index === bannerID ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={banner.img}
              alt={banner.alt || `Hero banner ${index + 1}`}
              className="rounded-[6px] object-cover"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1880px"
              priority={true}
              quality={75}
            />
            <div
              className="absolute inset-0 bg-[#02090f30]"
              aria-hidden="true"
            />
          </div>
        ))}

        {/* Desktop HeroCard */}
        <div className="absolute top-[-155px] xl:top-[-176px] left-[6%] -translate-x-[2.5%] hidden lg:block z-10">
          <HeroCard />
        </div>

        {/* ul diye wrap — valid HTML */}
        <ul className="absolute bottom-[15px] right-[15px] sm:bottom-[20px] sm:right-[20px] md:bottom-[25px] md:right-[25px] lg:bottom-[30px] lg:right-[30px] xl:bottom-[35px] xl:right-[35px] z-20 flex gap-x-2 sm:gap-x-3 md:gap-x-4 xl:gap-x-5">
          {heroBanner.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleBannerClick(item.id)}
              className={`rounded-[6px] overflow-hidden border cursor-pointer transition-all duration-300
                ${
                  bannerID === index
                    ? "border-white scale-105" // active thumbnail highlight
                    : "border-bg-secondaryTwo opacity-70 hover:opacity-100"
                }`}
            >
              <Image
                // actual render size onujayi
                height={150}
                width={150}
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 150px"
                className="object-cover hover:scale-110 transition duration-400 ease-in-out
                  !h-[80px] !w-[80px] sm:!h-[100px] sm:!w-[100px] md:!h-[120px] md:!w-[120px] lg:!h-[135px] lg:!w-[135px] xl:!h-[150px] xl:!w-[153px]"
                src={item.img}
                alt={item.alt || `Banner thumbnail ${index + 1}`} // meaningful alt
              />
            </li>
          ))}
        </ul>
      </div>

      {/* heroSections — ektai ul, responsive class diye handle */}
      <div className="px-3">
        <ul className="flex flex-wrap justify-center lg:justify-start gap-3">
          {heroSections.map((item, index) => (
            <li
              key={index}
              className="py-[13px] px-[20px] lg:flex-1 lg:text-center
                border border-[#0000001a] text-primary font-medium rounded-[6px]
                whitespace-nowrap"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
