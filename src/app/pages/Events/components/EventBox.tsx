import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
  HStack,
  DarkMode,
  Flex,
  Stack,
  AspectRatio,
} from '@chakra-ui/react';
import LazyLoad from 'react-lazyload';
import { Link, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { responsiveSpacing } from 'styles/chakraTheme';

const driveDirectURI = `https://drive.google.com/uc?export=view&id=`;

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
      <LazyLoad>
        <Box
          className="rounded"
          bgSize="cover"
          bgPos="center"
          _hover={{ backdropFilter: 'grayscale(30%)' }}
          bgImage={
            evt.attachments ? driveDirectURI + evt.attachments[0].fileId : ''
          }
          bgColor="black"
        >
          <AspectRatio ratio={0.773}>
            <Box
              as={Link}
              to={`events/${evt.id}`}
              w="100%"
              h={h || 'auto'}
              className="rounded hover-line"
              display="flex"
              flexDir="column"
            >
              <Flex grow={1} />
              <Stack
                w="100%"
                h="50%"
                bgGradient="linear(to-t, blackAlpha.900,rgba(0,0,0,0))"
                p={responsiveSpacing}
                justifyContent="flex-end"
                textAlign="left"
                borderBottomRadius="10px"
              >
                <HStack spacing={2}>
                  <Heading size="md">{evt.summary}</Heading>
                </HStack>
                <Text fontSize="xs">{formatDate(evt.start)}</Text>
              </Stack>
            </Box>
          </AspectRatio>
        </Box>
      </LazyLoad>
    </DarkMode>
  );
};

export default EventBox;
