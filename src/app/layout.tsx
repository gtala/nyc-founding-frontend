'use client'

import "./globals.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SiteHeader from "@/app/SiteHeader";
import {AccountAbstractionProvider} from "@/store/accountAbstractionContext";
import {config} from "@/wagmi";
import React from "react";
import { WagmiConfig } from 'wagmi'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <html lang="en" >
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        <WagmiConfig config={config as any}>  <AccountAbstractionProvider> {mounted && children}</AccountAbstractionProvider></WagmiConfig>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}