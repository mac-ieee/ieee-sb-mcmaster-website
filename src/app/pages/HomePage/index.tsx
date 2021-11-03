import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Text,
  Image,
  SimpleGrid,
  GridItem,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import EventSwiper from 'app/components/EventSwiper';
import { RiCalendarEventLine } from 'react-icons/ri';
import { MotionBox } from 'app/components/MotionComponents';
import { getUpcomingEvents } from 'utils/g-calendar-api/gCalendarAPI';
import { teamData } from 'data/teamData';
import { responsiveSpacing } from 'styles/chakraTheme';
import HeaderBg from 'assets/bg/header-bg.png';
import banner from 'assets/bg/banner.jpg';

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
      <VStack className="navbar-offset" spacing={0}>
        <VStack
          className="homepage-header-bg"
          align="center"
          justify="center"
          h="40vh"
          w="100%"
          textAlign="center"
          color="white"
          px={8}
          pb={8}
          spacing={responsiveSpacing}
          // bgImage={banner}
          bgColor="brand.primary"
          bgSize="cover"
          bgPos="center"
        >
          <MotionBox
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: '0.5' }}
            zIndex="1"
          >
            <Heading size="lg" color="white" fontWeight={400}>
              Welcome to the
            </Heading>
            <Heading color="brand.secondary" size="2xl" fontWeight={600}>
              IEEE McMaster Student Branch
            </Heading>
          </MotionBox>
          {/* <Box position="absolute">
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
          </Box> */}
        </VStack>
        <Box w="100%">
          <Container>
            <SimpleGrid
              className="rounded"
              justifyItems="center"
              p={responsiveSpacing}
              gap={responsiveSpacing}
              boxShadow="xl"
              bg="white"
              mt={{ base: '-10vw', lg: '-5vh' }}
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

                    <Heading
                      textAlign={{ base: 'left', md: 'center' }}
                      size="md"
                    >
                      {teamData[key].name}
                    </Heading>
                  </Stack>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>

        <Box w="100%" py={16}>
          <Container>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={responsiveSpacing}>
              <GridItem colSpan={1}>
                <VStack spacing={responsiveSpacing} alignItems="flex-start">
                  <Box>
                    <Heading>Upcoming Events & Workshops</Heading>
                  </Box>
                  <Text>
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
                    View All -&gt;
                  </Button>
                </VStack>
              </GridItem>
              <GridItem h="100%" colSpan={2} position="relative">
                <EventSwiper evts={upcomingEvts} />
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>
      </VStack>
    </>
  );
}
