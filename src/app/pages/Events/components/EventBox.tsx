import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
  Badge,
  Wrap,
  HStack,
  DarkMode,
  Flex,
} from '@chakra-ui/react';
import { Link, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';

type Props = {
  evt?: any;
  h?: string;
};

// type PlaceholderProps = { placeholder?: false } | { placeholder: true };

// type Props = PlaceholderProps & DataProps;

//const colors = ['blue', 'cyan', 'green', 'orange', 'teal', 'purple', 'pink'];
const EventBox = (props: Props) => {
  const { path, url } = useRouteMatch();
  const { evt, h } = props;
  console.log(evt);

  const formatDate = obj => {
    if (obj.hasOwnProperty('dateTime')) {
      return moment(obj.dateTime).format('MMMM Do YYYY @ h:mm:ss a');
    } else if (obj.hasOwnProperty('date')) {
      return moment(obj.date).format('MMMM Do YYYY');
    }
  };

  if (!evt) {
    return (
      <Box
        w="100%"
        alignItems="center"
        justifyContent="center"
        h="100%"
        minH="200px"
        className="rounded hover-line"
        bg={`blackAlpha.100`}
        display="flex"
      >
        There are no upcoming events.
      </Box>
    );
  }
  return (
    <DarkMode>
      <Box
        as={Link}
        to={`events/${evt.id}`}
        w="100%"
        h={h || 'auto'}
        className="rounded hover-line"
        bg={`brand.primary`}
        display="flex"
        flexDir="column"
      >
        <VStack spacing={4} alignItems="flex-start" p={8}>
          <HStack spacing={2}>
            {/* <Badge>🔴 LIVE</Badge> */}
            <Heading size="md">{evt.summary}</Heading>
            {/* <Badge bg="blackAlpha.200">{evt.organizer.displayName}</Badge> */}
          </HStack>
        </VStack>
        <Flex grow={1} />
        <HStack
          w="100%"
          bgGradient="linear(to-r, whiteAlpha.200,transparent)"
          p={8}
          py={4}
        >
          <Text>{formatDate(evt.start)}</Text>
          {/* <Text>Ends:{formatDate(evt.end)}</Text> */}
        </HStack>
      </Box>
    </DarkMode>
  );
};

export default EventBox;
