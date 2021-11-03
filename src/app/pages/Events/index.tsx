import {
  Box,
  Container,
  Heading,
  VStack,
  GridItem,
  SimpleGrid,
  AspectRatio,
  chakra,
} from '@chakra-ui/react';
import { Switch, useRouteMatch, useLocation, Route } from 'react-router-dom';
import React, { useState } from 'react';
import EventBox from './components/EventBox';
import { Helmet } from 'react-helmet-async';
import SingleEventPage from './pages/SingleEventPage';
import EventsGrid from '../HomePage/components/EventsGrid';
// import Calendar from './components/Calendar';
import { getUpcomingEvents } from 'utils/g-calendar-api/gCalendarAPI';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TabBar, { ITabData } from './components/TabBar';
import UpcomingEventsPage from './upcoming';
import PastEventsPage from './past-events';
import { responsiveSpacing } from 'styles/chakraTheme';

interface Props {}

const tabData: Array<ITabData> = [
  {
    label: 'Upcoming',
    content: <UpcomingEventsPage />,
    to: '',
  },
  {
    label: 'Past Events',
    content: <PastEventsPage />,
    to: '',
  },
  {
    label: 'Calendar',
    content: (
      <AspectRatio ratio={{ base: 1, md: 16 / 9 }}>
        <iframe
          title="google-calendar-iframe"
          src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f5f5f7&ctz=America%2FNew_York&src=ajVwYWZtMWpwdnFhb24zZmplcHVlcTE4dGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB`}
          width="100%"
          height="100%"
        />
      </AspectRatio>
    ),
    to: '',
  },
];

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
        <title>Event</title>
        <meta
          name="description"
          content="Details of the Event hosted by IEEE McMaster Student Branch"
        />
      </Helmet>
      <Box className="navbar-offset"></Box>
      <Switch>
        <VStack py={responsiveSpacing} w="100%" textAlign="center">
          <Container>
            <Route exact path={path}>
              <VStack
                spacing={responsiveSpacing}
                w="100%"
                alignItems="flex-start"
              >
                <chakra.h1 size="2xl">Events</chakra.h1>
                <TabBar data={tabData} />
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
