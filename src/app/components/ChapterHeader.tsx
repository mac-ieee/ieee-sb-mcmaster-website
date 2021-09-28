import { Heading, Box, Image, Stack } from '@chakra-ui/react';
import { teamData } from 'data/teamData';

const ChapterHeader = (props: { id: string }) => {
  const { name, logo, emoji } = teamData[props.id];
  return (
    <Box
      p={{ base: 4, lg: 8 }}
      className="rounded"
      w="100%"
      bg="brand.secondary"
      color="white"
      alignItems="flex-start"
      position="relative"
    >
      <Stack direction="row" alignItems="center">
        {/* <Image
          src={props.logo}
          w="50px"
          h="50px"
          filter="brightness(0) grayscale(1)"
        ></Image> */}
        <Heading fontSize={{ base: '4xl', lg: '6xl' }} zIndex="1">
          {emoji}
          {name}
        </Heading>
      </Stack>

      <Box
        bgImage={logo}
        w="100%"
        h="100%"
        top="0"
        left="0"
        right="0"
        bgPos="right"
        bgSize="cover"
        position="absolute"
        filter="grayscale(1) brightness(3)"
        opacity="0.2"
        blendMode="overlay"
      />
    </Box>
  );
};

export default ChapterHeader;
