import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { calendarId, gAPIKey } from 'app/_data/data';
import { SimpleGrid, Box } from '@chakra-ui/layout';
import EventBox from '../../Events/components/EventBox';
interface Props {
  items: number;
}

const EventsGrid = (props: Props) => {
  const [upcomingEvts, setUpcomingEvts] = useState([]);
  const { items } = props;
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
        {
          params: {
            orderBy: 'startTime',
            singleEvents: true,
            maxResults: items,
            timeMin: new Date(),
          },
        },
      )
      .then(res => {
        setUpcomingEvts(res.data.items);
      });
  }, []);
  return (
    <SimpleGrid
      className="rounded-children"
      columns={{ base: 1, md: 3 }}
      gap={8}
      w="100%"
    >
      {upcomingEvts.map(evt => {
        return <EventBox h="200px" key={evt.id} evt={evt} />;
      })}

      {/* <Box
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="center"
        h="200px"
        bg="blackAlpha.200"
      >
        More coming soon!
      </Box> */}
    </SimpleGrid>
  );
};

export default EventsGrid;
