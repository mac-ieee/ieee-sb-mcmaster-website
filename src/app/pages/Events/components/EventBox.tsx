import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
  HStack,
  DarkMode,
  Flex,
} from '@chakra-ui/react';
import { Link, useRouteMatch } from 'react-router-dom';
import moment from 'moment';

type Props = {
  evt?: any;
  h?: string;
};
const EventBox = (props: Props) => {
  const { evt, h } = props;

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
        bg={`black`}
        display="flex"
        flexDir="column"
      >
        <VStack spacing={4} alignItems="flex-start" p={8}>
          <HStack spacing={2}>
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
          {/* <Badge color="whiteAlpha.900">🔴 LIVE</Badge> */}
          <Text fontSize="xs">{formatDate(evt.start)}</Text>
        </HStack>
      </Box>
    </DarkMode>
  );
};

export default EventBox;
