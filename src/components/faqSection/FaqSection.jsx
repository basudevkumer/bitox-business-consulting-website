"use client";

import Container from "../ui/Container";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import { categories, faqData } from "../helper/faqhelper";
import { useState } from "react";
import AccordionItem from "../ui/AccordionItem";
import ButtonTwo from "../ui/ButtonTwo";

const FaqSection = () => {
  const { headerImg ,bottomImg} = allImages.FaqSection;
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setOpenIndex(null);
  };

  const faqItems = faqData[activeCategory];

  return (
    <section className="py-[120px]">
      <Container size="lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-10 md:mb-12">
          <div className="flex-1">
            <p className="text-sm font-bold w-fit uppercase text-[#02090f] leading-5 rounded-sm mb-5 sm:mb-6 md:mb-7.5 border border-[rgba(0,0,0,0.1)] py-2.5 px-3.75">
              Frequently asked questions
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold text-[#02090F] leading-tight lg:leading-[58px] w-full lg:w-[805px] tracking-[0%] underline">
              Frequently Asked Questions: Clear, Concise Answers
            </h2>
          </div>

          <div className="hidden sm:block w-[110px] h-[120px] md:w-[140px] md:h-[154px] lg:w-[162px] lg:h-[177px] shrink-0">
            <Image
              src={headerImg}
              alt="Faq images"
              width={162}
              height={177}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3     overflow-hidden">
          <div className="flex flex-col gap-[10px] ml-[15px] relative z-0  bg-[#E0DED7] py-5  pl-5  pr-[15px]   rounded-bl-[20px] rounded-tl-[20px] h-fit ">
            {categories.map((item) => (
              <button
                key={item.key}
                className={`px-[35px] py-[27px] rounded-[15px] text-primary bg-bg-secondaryTwo hover:bg-secondary hover:text-bg-secondaryTwo para-xl text-bold transition duration-500 ease-in-out text-start ${
                  activeCategory === item.key
                    ? "bg-secondary !text-bg-secondaryTwo"
                    : ""
                }`}
                onClick={() => handleCategoryChange(item.key)}
              >
                {item.label}
              </button>
            ))}
              <div className="absolute w-[100%] h-[550px] bg-bg-secondaryOne z-10 rounded-tr-[20px] top-[99%] left-[5.5px] "></div>
          </div>

          <div className="lg:col-span-2 space-y-[10px] bg-[#E0DED7] rounded-tr-[20px]  rounded-br-[20px] rounded-bl-[20px]  p-5 ">
            <div className="flex flex-col gap-[10px] pl-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  question={item.q}
                  answer={item.a}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
            <div className=" bg-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 px-5 sm:px-8 lg:px-10 py-5 sm:py-6 ml-2">
              <div className="w-full sm:flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-primary max-w-full sm:max-w-[389px] mb-3 sm:mb-4 lg:mb-5 leading-snug lg:leading-10 ">
                  Have any questions? we're <br className="hidden sm:block" />{" "}
                  here for you.
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-tarnary max-w-full sm:max-w-[407px] leading-6 sm:leading-7 mb-5 sm:mb-6 lg:mb-7.5">
                  If you manage high transaction volumes, multiple entities, or
                  require custom integrations, our team can tailor Makro to your
                  needs.
                </p>
                <ButtonTwo frontText="Get in touch" backText="Get in touch" />
              </div>

              {/* CTA illustration — hidden on mobile, shown sm+ */}
              <div className="hidden sm:block w-[260px] h-[218px] md:w-[320px] md:h-[268px] lg:w-[412px] lg:h-[344px] shrink-0">
                <Image
                  src={bottomImg}
                  alt="Support illustration"
                  width={412}
                  height={344}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
