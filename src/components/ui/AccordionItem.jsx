"use client";

import { allIcons } from "../helper/iconProvider";

const AccordionItem = ({
  question = `What does a business consultant do?`,
  answer = `A business consultant analyzes your company's challenges, identifies growth opportunities and provides strategic solutions to improve performance, profitability, and scalability.`,
  index,
  openIndex,
  setOpenIndex,
}) => {
  const { chebronDown } = allIcons;

  const showAccordion = openIndex === index;

  const handleToggle = () => {
    setOpenIndex(showAccordion ? null : index);
  };

  return (
    <div className="">
      <div className="px-[35px] py-6 bg-bg-secondaryTwo rounded-[15px]">
        <button
          className="text-primary headingSixAlter font-medium flex items-center gap-x-4 cursor-pointer w-full text-left"
          onClick={handleToggle}
        >
          <span
            className={`text-base transition duration-400 ease-in-out ${
              showAccordion ? "rotate-[180deg]" : "rotate-0"
            }`}
          >
            {chebronDown}
          </span>
          {question}
        </button>

        <div
          className={`pl-9 overflow-hidden transition-all duration-400 ease-in-out ${
            showAccordion ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-tarnary para-lg font-normal mt-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;