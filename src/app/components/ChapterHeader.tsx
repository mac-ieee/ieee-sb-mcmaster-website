import { Heading, Box, Image, Stack, chakra } from '@chakra-ui/react';
import { teamData } from 'data/teamData';
import { responsiveSpacing } from 'styles/chakraTheme';
import './components.scss';
const ChapterHeader = (props: { id: string }) => {
  const { name, logo, emoji } = teamData[props.id];
  return (
    <Box
      p={responsiveSpacing}
      className="rounded bordered"
      w="100%"
      bg="white"
      boxShadow="xl"
      color="white"
      alignItems="flex-start"
      position="relative"
    >
      <Stack direction="row" alignItems="center">
        <chakra.h1 zIndex="1">{name.toUpperCase()}</chakra.h1>
      </Stack>

      <Box bgImage={logo} className="chapter-header-overlay" />
    </Box>
  );
};

export default ChapterHeader;
