import AboutOverview from "@/components/aboutUs/AboutOverview";
import AboutTeam from "@/components/aboutUs/AboutTeam";
import AboutVideo from "@/components/aboutUs/AboutVideo";
import InnerPageHero from "@/components/ui/InnerPageHero";
import React from "react";

const About = () => {
  return (
    <div>
      <InnerPageHero  />
      <AboutOverview/>
      <AboutVideo/>
      <AboutTeam/>
    </div>
  );
};

export default About;
