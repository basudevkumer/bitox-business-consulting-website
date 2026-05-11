import RotatingBadge from "../ui/RotatingBadge";
import Container from "../ui/Container";
import HeroCard from "../ui/HeroCard";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import Responsive from "../ui/Responsive";
import { heroSections } from "../helper/homeOnehelper";

const HeroSection = () => {
  const { heroBanner } = allImages;

  return (
    <section className=" pt-[140px] lg:pt-[180px] pb-[90px] ">
      <Container size="2xl">
        {/* 2xl devices */}
        <div className="relative hidden 2xl:block">
          <h1 className="font-heading headingOne  uppercase tracking-tight ">
            <span className="block font-extrabold ">
              <span className="flex items-center">
                Business <RotatingBadge size="lg" />
              </span>
            </span>
            <span className="block font-medium pl-[520px]">Strategy</span>
          </h1>
          <div className="absolute top-[100%] translate-y-[-13.5%] left-0 ">
            <HeroCard />
          </div>
        </div>
        {/* xl devices */}
        <div className="relative hidden xl:block 2xl:hidden">
          <h1 className="font-heading headingOne  uppercase tracking-tight ">
            <span className="block font-extrabold ">
              <span className="flex items-center">
                Business <RotatingBadge size="lg" />
              </span>
            </span>
            <span className="block font-medium pl-[450px]">Strategy</span>
          </h1>
          <div className="absolute top-[100%] translate-y-[-13.5%] left-0 ">
            <HeroCard />
          </div>
        </div>
        {/* lg devices */}
        <div className="relative hidden lg:block xl:hidden">
          <h1 className="font-heading headingOne  uppercase tracking-tight ">
            <span className="block font-extrabold ">
              <span className="flex items-center">
                Business <RotatingBadge size="lg" />
              </span>
            </span>
            <span className="block font-medium pl-[360px]">Strategy</span>
          </h1>
          <div className="absolute top-[100%] translate-y-[-13.5%] left-0 ">
            <HeroCard />
          </div>
        </div>
        {/* sm devices */}
        <div className="relative lg:hidden md:hidden block">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-2">
            <span className="block font-extrabold ">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-12 flex justify-center ">
            <HeroCard />
          </div>
        </div>
        {/* md devices */}
        <div className="relative lg:hidden md:block hidden">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-3">
            <span className="block font-extrabold">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-13 flex justify-center ">
            <HeroCard />
          </div>
        </div>
      </Container>
      <div className=" mt-[50px] lg:mt-[90px] mb-[20px] px-3 max-w-[1880px]">
        <Image
          src={heroBanner[1].img}
          alt="herobanner-images"
          className="rounded-[6px] object-cover w-full h-[200px] xs:h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[550px] 2xl:h-[600px]"
          height={650}
          width={1880}
          priority
        />
      </div>
      {/* for lg */}
      <div className="px-3 hidden lg:block">
        <Responsive.Flex
          as="ul"
          justify="flex-start"
          gap="none"
          wrap={false}
          style={{ gap: "12px" }}
        >
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="
          flex-1 min-w-0
          flex items-center justify-center
          py-[19px] px-[20px]
          xl:py-[19px] xl:px-[20px]
          lg:py-[16px] lg:px-[16px]
          md:py-[13px] md:px-[12px]
          sm:py-[10px] sm:px-[10px]
          border border-[#0000001a]
          text-primary font-medium
          rounded-[6px]
          text-center
          whitespace-nowrap
        "
            >
              {items.title}
            </li>
          ))}
        </Responsive.Flex>
      </div>
      {/* for md   */}
      <div className="px-3 hidden md:block lg:hidden">
        <Responsive.Flex
          as="ul"
          justify="flex-start"
          gap="none"
          style={{ gap: "16px" }}
          className=""
        >
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="py-[19px] px-[77px] border border-[#0000001a] text-primary font-medium rounded-[6px]
              lg:py-[16px] lg:px-[77px]
              md:py-[13px] md:px-[30px]
              sm:py-[10px] sm:px-[15px]
             
              "
            >
              {items.title}
            </li>
          ))}
        </Responsive.Flex>
      </div>
      {/* for sm   */}
      <div className="px-3 md:hidden block">
        <ul className="flex flex-wrap gap-5 justify-center">
          {heroSections.map((items, index) => (
            <li
              key={index}
              className="py-[19px]  text-center w-[250px] border border-[#0000001a] text-primary font-medium rounded-[6px]"
            >
              {items.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
