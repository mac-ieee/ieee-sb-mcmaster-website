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
import {
  getPastEvents,
  getUpcomingEvents,
  getEventsWithinYear,
} from 'utils/g-calendar-api/gCalendarAPI';
import EventBox from './components/EventBox';
import { Select } from '@chakra-ui/react';
import { responsiveSpacing } from 'styles/chakraTheme';

const PastEventsPage = () => {
  const [evts, setEvts] = React.useState([]);
  const [yearSelected, setYearSelected] = React.useState<number>(
    new Date().getFullYear(),
  );

  React.useEffect(() => {
    const fn = async () => {
      const evts: Array<any> = await getEventsWithinYear(yearSelected);
      evts.reverse();
      setEvts(evts);  
    };

    fn();
  }, [yearSelected]);

  const handleChange = e => {
    setYearSelected(e.target.value);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" mb={responsiveSpacing}>
        <Text whiteSpace="nowrap">Filter by Year:</Text>
        <Select
          bg="white"
          w={{ base: '100%', md: '150px' }}
          value={yearSelected}
          onChange={handleChange}
        >
          {[2020, 2021].map(year => {
            return <option value={year}>{year}</option>;
          })}
        </Select>
      </Stack>

      <SimpleGrid
        columns={[1, 2, 2, 3]}
        spacing={responsiveSpacing}
        minW="100%"
      >
        {evts.map(evt => {
          return <EventBox evt={evt} />;
        })}
      </SimpleGrid>
    </>
  );
};
export { PastEventsPage, PastEventsPage as default };
