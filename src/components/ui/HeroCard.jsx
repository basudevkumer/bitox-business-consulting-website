import React from "react";
import Link from "next/link";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import ButtonTwo from "./ButtonTwo";

const HeroCard = () => {
  const { heroIocns } = allImages;

  return (
    <div>
      {/* 2xl */}
      <div className="max-w-[430px] p-[35px] bg-bg-secondaryTwo rounded-[6px] hidden  2xl:block">
        <h4 className="headingFour font-bold ">
          Building the right foundation of your business
        </h4>
        <p className="pt-[30px]  pb-[170px] para-lg text-tarnary">
          We are <span className="font-bold">dedicated to guiding</span> you on
          your financial journey with expertise integrity and a personalized
          approach, always.
        </p>
         <a
          href="https://youtu.be/l6shgiK9Z-k?si=fMjmxKVUJythzBZ5"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100%]"
        >
          <div className="relative w-full">
            <ButtonTwo
              frontText={"Get consultation"}
              backText="Watch Now."
              className={"!w-full !py-[18px] !justify-start !pr-[60px]"}
            />

            {/* Wave circle */}
            <div className="absolute top-0 right-[3.5px] h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[52px] h-[52px]">
                <span
                  className="absolute h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0.6s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "1.2s" }}
                />

                <Image
                  src={heroIocns}
                  width={50}
                  height={50}
                  alt="hero-card-images "
                  className="z-0"
                />
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* xl */}
      <div className="max-w-[430px] p-[35px] bg-bg-secondaryTwo rounded-[6px] hidden xl:block  2xl:hidden">
        <h4 className="headingFour font-bold ">
          Building the right foundation of your business
        </h4>
        <p className="pt-[30px]  lg:pb-[100px] para-lg text-tarnary">
          We are <span className="font-bold">dedicated to guiding</span> you on
          your financial journey with expertise integrity and a personalized
          approach, always.
        </p>
         <a
          href="https://youtu.be/l6shgiK9Z-k?si=fMjmxKVUJythzBZ5"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100%]"
        >
          <div className="relative w-full">
            <ButtonTwo
              frontText={"Get consultation"}
              backText="Watch Now."
              className={"!w-full !py-[18px] !justify-start !pr-[60px]"}
            />

            {/* Wave circle */}
            <div className="absolute top-0 right-[3.5px] h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[52px] h-[52px]">
                <span
                  className="absolute h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0.6s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "1.2s" }}
                />

                <Image
                  src={heroIocns}
                  width={50}
                  height={50}
                  alt="hero-card-images "
                  className="z-0"
                />
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* lg devices */}
      <div className="max-w-[340px] p-[25px] bg-bg-secondaryTwo rounded-[6px] hidden lg:block xl:hidden">
        <h4 className="headingFour font-bold ">
          Building the right foundation of your business
        </h4>
        <p className="pt-[30px]  lg:pb-[100px] para-lg text-tarnary">
          We are <span className="font-bold">dedicated to guiding</span> you on
          your financial journey with expertise integrity and a personalized
          approach, always.
        </p>
        <a
          href="https://youtu.be/l6shgiK9Z-k?si=fMjmxKVUJythzBZ5"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100%]"
        >
          <div className="relative w-full">
            <ButtonTwo
              frontText={"Get consultation"}
              backText="Watch Now."
              className={"!w-full !py-[18px] !justify-start !pr-[60px]"}
            />

            {/* Wave circle */}
            <div className="absolute top-0 right-[3.5px] h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[52px] h-[52px]">
                <span
                  className="absolute h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0.6s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "1.2s" }}
                />

                <Image
                  src={heroIocns}
                  width={50}
                  height={50}
                  alt="hero-card-images "
                  className="z-0"
                />
              </div>
            </div>
          </div>
        </a>
       
      </div>
      {/* py-4 px-[25px] bg-primary text-start text-bg-secondaryTwo w-[100%]   rounded-[6px] */}
      {/* sm, md devices */}
      <div className="max-w-[470px] p-5 md:p-[35px] bg-bg-secondaryTwo rounded-[6px] block lg:hidden ">
        <h4 className="headingFour font-bold ">
          Building the right foundation of your business
        </h4>
        <p className="pt-[30px] pb-[50px] md:pb-[100px]  para-lg text-tarnary">
          We are <span className="font-bold">dedicated to guiding</span> you on
          your financial journey with expertise integrity and a personalized
          approach, always.
        </p>
         <a
          href="https://youtu.be/l6shgiK9Z-k?si=fMjmxKVUJythzBZ5"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100%]"
        >
          <div className="relative w-full">
            <ButtonTwo
              frontText={"Get consultation"}
              backText="Watch Now."
              className={"!w-full !py-[18px] !justify-start !pr-[60px]"}
            />

            {/* Wave circle */}
            <div className="absolute top-0 right-[3.5px] h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[52px] h-[52px]">
                <span
                  className="absolute h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0.6s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "1.2s" }}
                />

                <Image
                  src={heroIocns}
                  width={50}
                  height={50}
                  alt="hero-card-images "
                  className="z-0"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroCard;
