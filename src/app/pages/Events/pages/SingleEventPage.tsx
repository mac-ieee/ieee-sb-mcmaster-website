import React, { useCallback, useEffect } from 'react';
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
  Stack,
  Link,
  Badge,
} from '@chakra-ui/react';
import _ from 'lodash';
import { formatDateObj } from 'utils/fns';
import { RiGoogleFill } from 'react-icons/ri';

const linkMapping = {
  SIGNUP: 'Sign Up',
};
interface Props {}

const parseEventDesc = (desc: string) => {
  const regExp = /{(.*?)}/g;

  let keys = {};

  desc.match(regExp).map(key => {
    desc = desc.replace(key, '');
    let newKeys = key.replace(/[{}]/g, '').split('=');
    // let newObj = { [newKeys[0]]: newKeys[1] };
    // keys.push({ [newKeys[0]]: newKeys[1] });
    keys[newKeys[0]] = newKeys[1];
  });

  console.log(keys, desc);
  return { keys, desc };
};

const SingleEventPage = (props: Props) => {
  const { eventId } = useParams<any>();
  const [evt, setEvt] = React.useState<any>({});
  const [descriptionData, setDescriptionData] = React.useState({
    keys: {},
    desc: '',
  });

  React.useEffect(() => {
    if (evt.description) {
      setDescriptionData(parseEventDesc(evt.description));
    }
  }, [evt.description]);

  const renderKeys = React.useCallback(() => {
    return Object.keys(descriptionData.keys).map(key => {
      const linkKey = descriptionData.keys[key];
      console.log(linkKey);
      return (
        <Button variant="secondary" size="md">
          {key}
        </Button>
      );
    });
  }, [descriptionData.keys]);
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
      spacing={0}
      w="100%"
      alignItems="flex-start"
      textAlign="left"
    >
      <VStack
        alignItems="flex-start"
        spacing={8}
        p={16}
        bg="brand.primary"
        w="100%"
      >
        <DarkMode>
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
        </DarkMode>
      </VStack>

      <Stack spacing={{ base: 4 }} bg="blackAlpha.50" p={8} w="100%">
        <Heading fontSize="xl">Links</Heading>
        <Text>{renderKeys()}</Text>
      </Stack>

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
        <Text>{descriptionData.desc}</Text>
      </Box>
    </VStack>
  );
};

export default SingleEventPage;
