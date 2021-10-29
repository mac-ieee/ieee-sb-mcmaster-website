import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { calendarId, gAPIKey } from 'app/data/data';
import { Wrap, WrapItem } from '@chakra-ui/react';
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
import { responsiveSpacing } from 'styles/chakraTheme';

interface Props {}

const parseEventDesc = (desc: string) => {
  const regExp = /{(.*?)}/g;

  let keys = {};

  desc.match(regExp).forEach(key => {
    desc = desc.replace(key, '');
    let newKeys = key.replace(/[{}]/g, '').split('=');
    keys[newKeys[0]] = newKeys[1];
  });

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
      return (
        <WrapItem>
          <Link isExternal href={linkKey}>
            <Button variant="secondary" size="md">
              {key}
            </Button>
          </Link>
        </WrapItem>
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
  }, [eventId]);

  const evtDetails = _.pick(evt, ['location']);
  return (
    <VStack
      className="rounded-children"
      spacing={responsiveSpacing}
      w="100%"
      alignItems="flex-start"
      textAlign="left"
    >
      <VStack
        alignItems="flex-start"
        spacing={8}
        p={responsiveSpacing}
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
        </DarkMode>
      </VStack>

      {renderKeys().length && (
        <Stack
          spacing={{ base: 4 }}
          bg="blackAlpha.50"
          p={responsiveSpacing}
          w="100%"
        >
          <Heading fontSize="xl">Links</Heading>
          <Wrap>
            {renderKeys()}
            <WrapItem>
              <Button
                size="md"
                variant="outline"
                onClick={() => window.open(evt.htmlLink)}
                leftIcon={<RiGoogleFill />}
              >
                Google Calendar Link
              </Button>
            </WrapItem>
          </Wrap>
        </Stack>
      )}

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
