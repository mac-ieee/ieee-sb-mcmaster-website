import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Image,
  AspectRatio,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import MainNavbar from 'app/components/MainNavbar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import './homepage.scss';
import EventSwiper from 'app/components/EventSwiper';
import Availability from 'app/components/Availability';
import EventsGrid from './components/EventsGrid';
import { RiCalendarEventLine } from 'react-icons/ri';
import IEEEMSBLogo from '../../../assets/ieeesb.png';
import { MotionBox } from 'app/components/MotionComponents';
import { getUpcomingEvents } from 'utils/g-calendar-api/gCalendarAPI';
const quickLinks = {
  // Events: '/events',
  // Availability: '/',
  // Services: '/',
};

export function HomePage() {
  const [upcomingEvts, setUpcomingEvts] = React.useState([]);
  React.useEffect(() => {
    getUpcomingEvents(6).then(evts => setUpcomingEvts(evts));
  }, []);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <VStack className="navbar-offset" spacing={0}>
        <VStack
          className="homepage-header-bg"
          align="center"
          justify="center"
          h="50vh"
          w="100%"
          textAlign="center"
          color="white"
          px={8}
          pb={16}
          spacing={8}
          //bgGradient="linear(to-b, blackAlpha.200,white)"
          bg="brand.primary"
        >
          {/* <Image w="200px" src={IEEEMSBLogo} /> */}

          <MotionBox
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: '0.5' }}
            zIndex="1"
          >
            <Heading size="xl" color="white" fontWeight={500}>
              Welcome to the
            </Heading>
            <Heading color="brand.secondary" size="3xl" fontWeight={700}>
              IEEE McMaster Student Branch
            </Heading>
          </MotionBox>
          <Box position="absolute">
            <Heading
              lineHeight="0.8"
              opacity={0.3}
              userSelect="none"
              color="blackAlpha.50"
              fontSize="200px"
              whiteSpace="pre"
              fontWeight="100"
              bgGradient="linear(to-b, brand.primary,brand.secondary)"
              bgClip="text"
            >
              IEEE McMaster <br />
              Student Branch
            </Heading>
          </Box>

          {/* <HStack>
            {Object.keys(quickLinks).map(key => {
              return (
                <Text
                  as={Link}
                  to={quickLinks[key]}
                  fontSize="lg"
                  className="p-hover-bold"
                >
                  {key}
                </Text>
              );
            })}
          </HStack> */}
        </VStack>
        <Box bg="whiteAlpha.900" w="100%" py={16}>
          <Container maxW="container.lg">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
              <VStack spacing={8} alignItems="flex-start">
                <Box>
                  <Badge mb={4}>Attend A workshop!</Badge>
                  <Heading size="2xl">Upcoming Events & Workshops</Heading>
                </Box>
                <Text fontSize="lg">
                  Check out a preview of events happening soon. Learn a new
                  skill, meet new people, or just have fun!
                </Text>

                <Button
                  leftIcon={<RiCalendarEventLine />}
                  size="xl"
                  variant="secondary"
                  p={4}
                  as={Link}
                  to={'/events'}
                  className="float-up"
                >
                  View All Events & Workshops -&gt;
                </Button>
              </VStack>
              <EventSwiper evts={upcomingEvts} />
            </SimpleGrid>
          </Container>
        </Box>
        {/* <VStack spacing={8} py={24} w="100%">
          <Heading>IEEE Exec Availability</Heading>
          <Availability />
        </VStack> */}
        {/* <VStack
          justifyContent="center"
          py={24}
          px={{ base: 8 }}
          w="100%"
          bg="brand.secondary"
          mt="0"
          spacing={4}
        >
          <Heading>So, you want to join IEEE?</Heading>
          <Button variant="outline">Yes, I do!</Button>
        </VStack> */}
      </VStack>
    </>
  );
}
