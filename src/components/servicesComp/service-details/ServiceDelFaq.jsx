"use client";
import { useState } from "react";
import { faqData } from "@/components/helper/faqhelper";
import AccordionItem from "@/components/ui/AccordionItem";
import Container from "@/components/ui/Container";

const ServiceDelFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mb-[120px]">
      <Container size="lg">
        <div className="grid grid-cols-3 gap-[125px]">
          <div>
            <h3 className="headingThree max-w-[408px] text-start font-bold text-primary">
              Frequently asked question
            </h3>
          </div>
          <div className="col-span-2 space-y-[10px]">
            {faqData.general.map((items, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={items.q}
                answer={items.a}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDelFaq;