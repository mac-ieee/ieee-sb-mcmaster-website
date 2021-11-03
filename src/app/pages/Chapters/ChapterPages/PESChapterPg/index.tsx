import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import './pes-chapter-pg.scss';
interface Props {}

const PESChapterPg = (props: Props) => {
  return (
    <Box backgroundColor="chapters.pes">
      <Text color="chapters.pes">PES</Text>
    </Box>
  );
};

export default PESChapterPg;
