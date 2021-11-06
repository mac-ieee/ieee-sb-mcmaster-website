import {
  DarkMode,
  Container,
  Box,
  chakra,
  Center,
  Button,
  Stack,
} from '@chakra-ui/react';
import { socialInfo } from 'app/data/data';
import React from 'react';
import { RiDiscordFill } from 'react-icons/ri';

interface Props {}

const JoinBanner = (props: Props) => {
  return (
    <Box w="100%" bg="black" py={24}>
      <DarkMode>
        <Container>
          <Center>
            <Stack spacing={8} alignItems="center">
              <chakra.h1 textAlign="center" color="white">
                Interested in joining us?
              </chakra.h1>
              <Button
                leftIcon={<RiDiscordFill />}
                w="min-content"
                variant="outline"
                onClick={() => window.open(socialInfo.discord)}
              >
                Join the Discord
              </Button>
            </Stack>
          </Center>
        </Container>
      </DarkMode>
    </Box>
  );
};

export default JoinBanner;
