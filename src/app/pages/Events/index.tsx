import {
  Box,
  Container,
  Heading,
  Grid,
  VStack,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { Switch, useRouteMatch, useLocation, Route } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import EventBox from './components/EventBox';
import { Helmet } from 'react-helmet-async';
import SingleEventPage from './pages/SingleEventPage';
import { calendarId, gAPIKey } from 'app/_data/data';
import EventsGrid from '../HomePage/components/EventsGrid';
import Calendar from './components/Calendar';
import { getUpcomingEvents } from 'utils/g-calendar-api/gCalendarAPI';

// const axios = require('axios').default;
interface Props {}

const Events = (props: Props) => {
  const [upcomingEvts, setUpcomingEvts] = useState([]);
  const { path, url } = useRouteMatch();
  const location = useLocation();
  React.useEffect(() => {
    getUpcomingEvents(6).then(evts => setUpcomingEvts(evts));
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="About the IEEE McMaster Student Branch"
        />
      </Helmet>
      <Box className="navbar-offset"></Box>
      <Switch>
        <VStack py={8} w="100%" textAlign="center">
          <Container>
            <Route exact path={path}>
              {/* <VStack spacing={8} w="100%">
                <Heading size="2xl">Events</Heading>

                <Heading size="md">Upcoming</Heading>
                <EventsGrid items={9} />
                {upcomingEvts.map(evt => {
                  return <EventBox key={evt.id} evt={evt} />;
                })}
                <Heading size="md">Calendar</Heading>
                <Calendar />
                
              </VStack> */}
              <VStack spacing={8} w="100%" alignItems="flex-start">
                <Heading size="2xl">Events</Heading>
                <SimpleGrid
                  w="inherit"
                  // templateColumns={{
                  //   base: 'repeat(1, 1fr)',
                  //   md: 'repeat(3, 1fr)',
                  // }}
                  columns={{ base: 1, md: 3 }}
                  columnGap={{ base: 0, md: 8 }}
                  gap={8}
                >
                  <GridItem colSpan={2}>
                    <iframe
                      title="google-calendar-iframe"
                      src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f5f5f7&ctz=America%2FNew_York&src=ajVwYWZtMWpwdnFhb24zZmplcHVlcTE4dGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB`}
                      width="100%"
                      height="600"
                    ></iframe>
                  </GridItem>
                  <GridItem>
                    <VStack
                      bg="brand."
                      p={4}
                      w="100%"
                      spacing={4}
                      alignItems="flex-start"
                    >
                      <Heading size="md" mb={4}>
                        Upcoming
                      </Heading>
                      {upcomingEvts.map(evt => {
                        return <EventBox key={evt.id} evt={evt} />;
                      })}
                    </VStack>
                  </GridItem>
                </SimpleGrid>
              </VStack>
            </Route>
            <Route path={`${path}/:eventId`}>
              <SingleEventPage />
            </Route>
          </Container>
        </VStack>
      </Switch>
    </>
  );
};

export default Events;