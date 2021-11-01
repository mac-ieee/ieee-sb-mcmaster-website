import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { calendarId, gAPIKey } from 'app/data/data';
import { AspectRatio, GridItem, Wrap, WrapItem } from '@chakra-ui/react';
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
  Image,
} from '@chakra-ui/react';
import _ from 'lodash';
import { capitalize, formatDateObj } from 'utils/fns';
import { RiGoogleFill } from 'react-icons/ri';
import { responsiveSpacing } from 'styles/chakraTheme';
import { driveDirectURI } from 'utils/g-calendar-api/gCalendarAPI';

interface Props {}

const parseEventDesc = (desc: string) => {
  const regExp = /{(.*?)}/g;

  let keys = {};
  if (desc.match(regExp)) {
    desc.match(regExp).forEach(key => {
      desc = desc.replace(key, '');
      let newKeys = key.replace(/[{}]/g, '').split('=');
      keys[newKeys[0]] = newKeys[1];
    });
  }

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

  // const evtDetails = _.pick(evt, ['location']);
  const evtDetails = _.pick(evt, ['start', 'end', 'location']);

  const imageUrl = React.useMemo(
    () => (evt.attachments ? driveDirectURI + evt.attachments[0].fileId : ''),
    [evt.attachments],
  );
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
        spacing={responsiveSpacing}
        bgImage={
          evt.attachments ? driveDirectURI + evt.attachments[0].fileId : ''
        }
        bgColor="black"
        bgSize="cover"
        w="100%"
      >
        <Box
          bgGradient="linear(to-r, blackAlpha.900, blackAlpha.700)"
          minW="100%"
          p={responsiveSpacing}
        >
          <DarkMode>
            <Stack spacing={responsiveSpacing}>
              <Box>
                <Badge mb={4}>Event</Badge>
                <Heading size="3xl">{evt.summary}</Heading>
              </Box>
              <div>
                {Object.keys(evtDetails).map((key: string) => {
                  let data;
                  switch (key) {
                    case 'start':
                    case 'end':
                      data = formatDateObj(evtDetails[key]);
                      break;

                    default:
                      data = evtDetails[key];
                      break;
                  }
                  return (
                    <Text>
                      {capitalize(key)} :{' '}
                      <span style={{ color: 'white' }}>{data}</span>
                    </Text>
                  );
                })}
              </div>
              <hr />
              {renderKeys().length && (
                <Stack spacing={{ base: 4 }} bg="blackAlpha.50" w="100%">
                  <Heading fontSize="xl">Links</Heading>
                  <Wrap>{renderKeys()}</Wrap>
                </Stack>
              )}
            </Stack>
          </DarkMode>
        </Box>
      </VStack>

      {/* {Object.keys(evtDetails).map(key => {
        return (
          <Box w="100%" className="hover-line" bg="blackAlpha.100" p={8}>
            <Text>{key}</Text>
            <Heading size="md">{evtDetails[key]}</Heading>
          </Box>
        );
      })} */}
      <SimpleGrid
        className="rounded-children"
        spacing={responsiveSpacing}
        columns={{ base: 1, md: 2 }}
        w="100%"
      >
        {imageUrl && (
          <AspectRatio ratio={8.5 / 11}>
            <Image src={imageUrl} className="rounded" />
          </AspectRatio>
        )}
        <Stack>
          <Heading fontSize="xl">Event Description</Heading>
          <Text>{descriptionData.desc}</Text>
        </Stack>
      </SimpleGrid>
    </VStack>
  );
};

export default SingleEventPage;
