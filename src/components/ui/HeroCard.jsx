import React from "react";
import Link from "next/link";
import Image from "next/image";
import allImages from "../helper/imageProvider";

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
        <button className=" w-[100%]  relative">
          <Link
            href={"/"}
            className=" inline-block py-4 px-[25px] bg-primary text-start text-bg-secondaryTwo w-[100%] rounded-[6px]"
          >
            Get consultation{" "}
          </Link>
          <Image
            src={heroIocns}
            width={50}
            height={50}
            className="absolute top-1/2 -translate-y-1/2  right-[3.5px]"
            alt="hero-card-images"
          />
        </button>
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
        <button className=" w-[100%]  relative">
          <Link
            href={"/"}
            className=" inline-block py-4 px-[25px] bg-primary text-start text-bg-secondaryTwo w-[100%] rounded-[6px]"
          >
            Get consultation{" "}
          </Link>
          <Image
            src={heroIocns}
            width={50}
            height={50}
            className="absolute top-1/2 -translate-y-1/2  right-[3.5px]"
            alt="hero-card-images"
          />
        </button>
      </div>

      {/* lg devices */}
      <div className="max-w-[340px] p-[25px] bg-bg-secondaryTwo rounded-[6px] hidden lg:block xl:hidden">
        <h4 className="headingFour font-bold ">
          Building the right foundation of your business
        </h4>
        <p className="pt-[30px]  lg:pb-[70px] para-lg text-tarnary">
          We are <span className="font-bold">dedicated to guiding</span> you on
          your financial journey with expertise integrity and a personalized
          approach, always.
        </p>
        <button className=" w-[100%]  relative">
          <Link
            href={"/"}
            className=" inline-block py-4 px-[25px] bg-primary text-start text-bg-secondaryTwo w-[100%] rounded-[6px]"
          >
            Get consultation{" "}
          </Link>
          <Image
            src={heroIocns}
            width={50}
            height={50}
            className="absolute top-1/2 -translate-y-1/2  right-[3.5px]"
            alt="hero-card-images"
          />
        </button>
      </div>
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
        <button className=" w-[100%]  relative">
          <Link
            href={"/"}
            className=" inline-block py-4 px-[25px] bg-primary text-start text-bg-secondaryTwo w-[100%] rounded-[6px]"
          >
            Get consultation{" "}
          </Link>
          <Image
            src={heroIocns}
            width={50}
            height={50}
            className="absolute top-1/2 -translate-y-1/2  right-[3.5px]"
            alt="hero-card-images"
          />
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
