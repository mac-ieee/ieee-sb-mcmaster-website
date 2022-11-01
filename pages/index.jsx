import Head from "next/head";
import Image from "next/image";
import SbChapterBranches from "sections/home/sb-chapter-branches";
import React from "react";
import { Stack } from "@chakra-ui/react";
import UpcomingEventsAndWorkshopsSection from "sections/home/upcoming-events-and-workshops-section";
import JoinDiscordBannerSection from "sections/home/join-discord-banner-section";
import HeroSection from "sections/home/hero-section";
import { NextSeo } from "next-seo";

const spacing = [8, 8, 8, 8, 24]

export default function Home() {
  return (
    <>
      <NextSeo
        title="Homepage"
        description="" />
      <Stack spacing={spacing}>
        {/* <SbChapterBranches /> */}
        <HeroSection />
        <Stack spacing={spacing}>
          <UpcomingEventsAndWorkshopsSection />
          <JoinDiscordBannerSection />
        </Stack>
      </Stack>
    </>
  );
}
