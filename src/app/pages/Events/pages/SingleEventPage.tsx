import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { calendarId, gAPIKey } from 'app/_data/data';
import {
  Box,
  VStack,
  Heading,
  DarkMode,
  Text,
  Button,
  Link,
  Badge,
} from '@chakra-ui/react';
import _ from 'lodash';
import { formatDateObj } from 'utils/fns';
import { RiGoogleFill } from 'react-icons/ri';
interface Props {}

const SingleEventPage = (props: Props) => {
  const { eventId } = useParams<any>();
  const [evt, setEvt] = React.useState<any>({});
  React.useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}?key=${gAPIKey}`,
      )
      .then(res => {
        setEvt(res.data);
      });
  }, []);
  const evtDetails = _.pick(evt, ['location']);
  return (
    <VStack
      className="rounded-children"
      spacing={8}
      w="100%"
      alignItems="flex-start"
      textAlign="left"
    >
      <DarkMode>
        <VStack
          alignItems="flex-start"
          spacing={8}
          p={16}
          bg="brand.primary"
          w="100%"
        >
          <div>
            <Badge mb={4}>Event</Badge>
            <Heading size="3xl">{evt.summary}</Heading>
          </div>
          <div>
            <Text>
              Starts:{' '}
              <span style={{ color: 'white' }}>{formatDateObj(evt.start)}</span>
            </Text>
            <Text>
              Ends:{' '}
              <span style={{ color: 'white' }}>{formatDateObj(evt.end)}</span>
            </Text>
          </div>

          <Button
            size="md"
            variant="secondary"
            onClick={() => window.open(evt.htmlLink)}
            leftIcon={<RiGoogleFill />}
          >
            Google Calendar Link
          </Button>
        </VStack>
      </DarkMode>

      {Object.keys(evtDetails).map(key => {
        return (
          <Box w="100%" className="hover-line" bg="blackAlpha.100" p={8}>
            <Text>{key}</Text>
            <Heading size="md">{evtDetails[key]}</Heading>
          </Box>
        );
      })}
      <Box>
        <Heading fontSize="xl">Event Description</Heading>
        <Text>{evt.description}</Text>
      </Box>
    </VStack>
  );
};

export default SingleEventPage;
