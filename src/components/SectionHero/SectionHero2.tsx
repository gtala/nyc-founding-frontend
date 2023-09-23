'use client'
import React, { FC } from "react";
import imagePng from "@/images/hero-right-3.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import HeroSearchForm from "../HeroSearchForm/HeroSearchForm";
import {useAccountAbstraction} from "@/store/accountAbstractionContext";

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  const {
    safeSelected, chainId,
    isAuthenticated,
    loginWeb3Auth,
    safes
  } = useAccountAbstraction()

  return (
    <div
      className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-36 xl:pb-60 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
            Where would tou like to help today 🖼️
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Discover the most outstanding NTFs in all topics of life. <br />{" "}
            Creative your NTFs and sell them
          </span>



          <ButtonPrimary onClick={ async ()=> {

            console.log('test')
            await loginWeb3Auth() }} >
            <span>Login</span>

          </ButtonPrimary>
          <div>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">Safe Account</span>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Your Safe account has been created
            </span>
            {safeSelected}
          </div>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={imagePng} alt="hero" />
        </div>
      </div>

      <div className="z-10 mb-12 lg:mb-0 lg:-mt-20 xl:-mt-48 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero2;