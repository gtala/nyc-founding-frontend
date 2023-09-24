'use client'
import rightImg from "@/images/hero-right1.png";
import React, {FC, useEffect} from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";
import {useAccountAbstraction} from "@/store/accountAbstractionContext";
import {graphServiceRKey} from "@/subgraphs/client";

const PageAbout = ({}) => {
    const { loginWeb3Auth, isAuthenticated, safeSelected, chainId } = useAccountAbstraction()


    useEffect(()=> {
        const useEffectAsync = async ()=>{
            const response = await graphServiceRKey().identityService('twitter', 'suji_yan')
            console.log(response)
        }
        useEffectAsync()
    }, [])

    return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      <BgGlassmorphism />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />
        <SectionFounder />
        <SectionStatistic />
      </div>
    </div>
  );
};

export default PageAbout;