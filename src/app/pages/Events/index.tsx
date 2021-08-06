import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const index = (props: Props) => {
  return (
    <>
      <Box className="navbar-offset"></Box>
      <VStack py={8} w="100%" textAlign="center">
        <Container>
          <Heading size="2xl">Events</Heading>
        </Container>
      </VStack>
    </>
  );
};

export default index;
