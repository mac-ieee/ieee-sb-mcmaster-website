import Head from "next/head";
import Image from "next/image";
import SbChapterBranches from "sections/home/sb-chapter-branches";
import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import UpcomingEventsAndWorkshopsSection from "sections/home/upcoming-events-and-workshops-section";
import JoinDiscordBannerSection from "sections/home/join-discord-banner-section";
import HeroSection from "sections/home/hero-section";

export default function Home() {
  return (
    <Stack spacing={24}>
      <SbChapterBranches />
      <HeroSection />
      <UpcomingEventsAndWorkshopsSection />
      <JoinDiscordBannerSection />
    </Stack>
  );
}
