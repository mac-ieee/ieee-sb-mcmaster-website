import Head from "next/head";
import Image from "next/image";
import SbChapterBranches from "sections/home/sb-chapter-branches";
import React from "react";
import { Box } from "@chakra-ui/react";
import UpcomingEventsAndWorkshopsSection from "sections/home/upcoming-events-and-workshops-section";

export default function Home() {
  return (
    <Box>
      <SbChapterBranches />
      <UpcomingEventsAndWorkshopsSection />
    </Box>
  );
}
