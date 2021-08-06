import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  AspectRatio,
} from '@chakra-ui/react';
import MainNavbar from 'app/components/MainNavbar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import './homepage.scss';
import EventSwiper from 'app/components/EventSwiper';

const quickLinks = {
  Events: {},
  Availability: {},
  Services: {},
};

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <VStack height="200vh" className="navbar-offset" spacing={8}>
        <VStack
          align="center"
          justify="center"
          h="65vh"
          w="100%"
          textAlign="center"
          color="black"
          px={8}
          pb={48}
          spacing={8}
          bgGradient="linear(to-b, blackAlpha.200,transparent)"
        >
          <Heading size="2xl">
            Welcome to the <br />
            IEEE McMaster Student Branch
          </Heading>
          <Button variant="primary">
            See what's going on right now &nbsp;
            <span className="moveRight">-&gt;</span>
          </Button>
          <HStack>
            {Object.keys(quickLinks).map(key => {
              return <Text>{key}</Text>;
            })}
          </HStack>
        </VStack>
        <VStack spacing={8} bg="whiteAlpha.900" py={24}>
          <EventSwiper />
          <Button variant="primary" p={4}>
            View All Upcoming Events -&gt;
          </Button>
        </VStack>
        <Container maxW="container.xl"></Container>
      </VStack>
    </>
  );
}
