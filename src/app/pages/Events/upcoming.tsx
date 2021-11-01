/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Box,
  VStack,
  Heading,
  DarkMode,
  Text,
  Button,
  Stack,
  Link,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import { getUpcomingEvents } from 'utils/g-calendar-api/gCalendarAPI';
import EventBox from './components/EventBox';
import { responsiveSpacing } from 'styles/chakraTheme';

const UpcomingEventsPage = () => {
  const [evts, setEvts] = React.useState([]);

  React.useEffect(() => {
    const fn = async () => {
      const evts = await getUpcomingEvents();
      setEvts(evts);
    };

    fn();
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 2, 3]} spacing={responsiveSpacing} minW="100%">
      {evts.map(evt => {
        return <EventBox evt={evt} />;
      })}
    </SimpleGrid>
  );
};
export { UpcomingEventsPage, UpcomingEventsPage as default };
