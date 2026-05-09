import React from "react";
import Container from "../ui/Container";
import FaqBody from "../ui/FaqBody";

const HomeFaqSection = () => {
  return (
    <section className="py-[120px]">
      <Container size="lg">
        <div>
          <h2 className="max-w-[981px] headingTwo text-primary font-bold text-center mx-auto mb-[80px]">
            Frequently Asked Questions: Clear, Concise Answers
          </h2>
          <FaqBody />
        </div>
      </Container>
    </section>
  );
};

export default HomeFaqSection;
