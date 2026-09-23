import AboutHero from "@/components/About/AboutHero";
import OurMission from "@/components/About/OurMission";
import OurStory from "@/components/About/OurStory";
import WhatWeDo from "@/components/About/WhatWeDo";
import CravingCTA from "@/components/Homepage/CravingCTA";
import WhyCravora from "@/components/Homepage/WhyCravora";
import PageBanner from "@/components/shared/PageBanner";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageBanner>About Cravora</PageBanner>
      <AboutHero />
      <OurStory />
      <WhatWeDo />
      <OurMission />
      <WhyCravora />
      <CravingCTA />
    </>
  );
};

export default AboutPage;
