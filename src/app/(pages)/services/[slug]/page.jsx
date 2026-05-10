import { servicesDetails } from "@/components/helper/serviceDetailsHelpers";
import ServiceDelFaq from "@/components/servicesComp/service-details/ServiceDelFaq";
import ServiceDescription from "@/components/servicesComp/service-details/ServiceDescription";
import ServiceImage from "@/components/servicesComp/service-details/ServiceImage";
import ServiceIntroSection from "@/components/servicesComp/service-details/ServiceIntroSection";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const ServicesDetails = async ({ params }) => {
  const { slug } = await params;

  const eachServiceDetailItems = servicesDetails.find((i) => i.slug === slug);

  

  return (
    <>
      <InnerPageHero
        title="Trusted High Quality Services"
        titleWidth={"!w-[300px] sm:!w-auto"}
      />
      <ServiceIntroSection  serviceItems={eachServiceDetailItems}/>
      <ServiceDescription  serviceITems={eachServiceDetailItems}/>
      <ServiceImage />
      <ServiceDelFaq/>
    </>
  );
};

export default ServicesDetails;
