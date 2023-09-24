import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "@/components/SectionHero/SectionHero";
import Vector1 from "@/images/Vector1.png";
import Image from "next/image";
import SectionLargeSlider from "../SectionLargeSlider";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderCollections from "@/components/SectionSliderCollections";
import SectionGridFeatureNFT from "../SectionGridFeatureNFT";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />
        <SectionSliderCategories />

      <div className="container relative space-y-20 mt-12 mb-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
        {/* SECTION HERO */}
        <SectionHero
          className="pb-10"
          heading={
            <span>
              Discover 🖼️
              <br /> collect, and sell <br /> extraordinary {` `}
              <span className="relative pr-3">
                <Image
                  className="w-full absolute bottom-3 -left-1"
                  src={Vector1}
                  alt="Vector1"
                />
                <span className="relative">Campaigns</span>
              </span>
            </span>
          }
        />

      </div>

      <div className="bg-neutral-100/80 dark:bg-black/20 py-20 lg:py-32">
        <div className="container">
          <SectionLargeSlider />
        </div>
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">

        <div className="relative py-20 lg:py-28">
          <BackgroundSection />
          <SectionSliderCollections />
        </div>

        <SectionGridFeatureNFT />

        <div className="relative py-20 lg:py-24">
          <BackgroundSection />
        </div>



      </div>
    </div>
  );
}

export default PageHome;