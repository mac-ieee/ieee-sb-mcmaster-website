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
  GridItem,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import './homepage.scss';
import EventSwiper from 'app/components/EventSwiper';
import { RiCalendarEventLine } from 'react-icons/ri';
import { MotionBox } from 'app/components/MotionComponents';
import { getUpcomingEvents } from 'utils/g-calendar-api/gCalendarAPI';
import { Logo, EMBSLogo, PESLogo, CSLogo } from 'assets/logos/logos';
import { teamData } from '../About Us/schema/teamData';
import { responsiveSpacing } from 'styles/chakraTheme';

export function HomePage() {
  const history = useHistory();
  const [upcomingEvts, setUpcomingEvts] = React.useState([]);
  React.useEffect(() => {
    getUpcomingEvents(6).then(evts => setUpcomingEvts(evts));
  }, []);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Home Page of the IEEE McMaster Student Branch"
        />
      </Helmet>
      <VStack bg="white" className="navbar-offset" spacing={0}>
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
          spacing={responsiveSpacing}
          bg="brand.primary"
        >
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
              display={{ base: 'none', xl: 'block' }}
            >
              IEEE McMaster <br />
              Student Branch
            </Heading>
          </Box>
        </VStack>
        <Container>
          <SimpleGrid
            className="rounded"
            justifyItems="center"
            // py={responsiveSpacing}
            p={responsiveSpacing}
            gap={responsiveSpacing}
            bg="whiteAlpha.900"
            backdropFilter="blur(10px)"
            boxShadow="xl"
            mt={{ base: '-15vw', lg: '-15vh' }}
            mb={responsiveSpacing}
            columns={{ base: 1, md: 4 }}
          >
            {Object.keys(teamData).map(key => {
              return (
                <Stack
                  className="rounded hover-line"
                  p={responsiveSpacing}
                  w="100%"
                  bg="blackAlpha.50"
                  direction={{ base: 'row', md: 'column' }}
                  alignItems="center"
                  spacing={8}
                  onClick={() => history.push(`/chapters/${key}`)}
                  cursor="pointer"
                >
                  <Image
                    w={{ base: '50px', md: '150px' }}
                    src={teamData[key].logo}
                  />

                  <Heading textAlign={{ base: 'left', md: 'center' }} size="md">
                    {teamData[key].name}
                  </Heading>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Container>

        <Box bg="whiteAlpha.900" w="100%" py={responsiveSpacing}>
          <Container>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={responsiveSpacing}>
              <GridItem colSpan={1}>
                <VStack spacing={responsiveSpacing} alignItems="flex-start">
                  <Box>
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
              </GridItem>
              <GridItem h="100%" colSpan={2}>
                <EventSwiper evts={upcomingEvts} />
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>
      </VStack>
    </>
  );
}
