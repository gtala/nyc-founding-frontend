import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderCollections from "@/components/SectionSliderCollections";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import React from "react";
import SectionGridFeatureNFT2 from "../SectionGridFeatureNFT2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import SectionHero3 from "@/components/SectionHero/SectionHero3";

function PageHome3() {
  return (
    <div className="nc-PageHome3 relative">
      <div className="container px-4">
        <SectionHero3 />
      </div>

      {/* SECTION 1 */}
      <SectionSliderCategories />


      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        {/* SECTION */}
        <div className="relative py-20 lg:py-28">
          <BackgroundSection />

        </div>

        {/* SECTION */}
        <SectionSliderCollections />


        {/* SECTION */}
        <div className="relative py-20 lg:py-28">
          <BackgroundSection className="bg-neutral-100/70 dark:bg-black/20 " />
          <SectionGridFeatureNFT2 />
        </div>



        {/* SECTION */}
        <div className="relative py-20 lg:py-24">
          <BackgroundSection />
        </div>
      </div>
    </div>
  );
}

export default PageHome3;