import React from "react";
import Container from "../ui/Container";
import Responsive from "../ui/Responsive";
import allImages from "../helper/imageProvider";
import Image from "next/image";

const BrandLogos = () => {
  const { homeOneBrand } = allImages;
  return (
    <section className="bg-bg-secondaryOne pt-[60px] pb-[120px]">
      <Container size="2xl">
        <Responsive.Flex as="ul" justify="space-between">
          {homeOneBrand.map((items, index) => {
            return (
              <li
                key={index}
                className="px-[80px] py-[77px] bg-bg-secondaryTwo flex items-center justify-center"
              >
                <Image
                  src={items.img}
                  alt={items.alt || "brand logo"}
                  width={120}
                  height={36}
                  className="h-[36px] !w-[100px] w-auto object-contain"
                />
              </li>
            );
          })}
        </Responsive.Flex>
      </Container>
    </section>
  );
};

export default BrandLogos;
