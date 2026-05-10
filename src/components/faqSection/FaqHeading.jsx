import Image from "next/image";
import allImages from "../helper/imageProvider";

const FaqHeading = () => {
  const { headerImg } = allImages.FaqSection;

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-10 md:mb-12 w-full overflow-hidden">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold w-fit uppercase text-[#02090f] leading-5 rounded-sm mb-5 sm:mb-6 md:mb-7 border border-[rgba(0,0,0,0.1)] py-2.5 px-3.5">
          Frequently asked questions
        </p>
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold text-[#02090F] leading-tight lg:leading-[58px] w-full tracking-[0%] underline max-w-[805px]">
          Frequently Asked Questions: Clear, Concise Answers
        </h2>
      </div>

      <div className="hidden sm:block w-[110px] h-[120px] md:w-[140px] md:h-[154px] lg:w-[162px] lg:h-[177px] shrink-0 overflow-hidden">
        <Image
          src={headerImg}
          alt="Faq images"
          width={162}
          height={177}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default FaqHeading;