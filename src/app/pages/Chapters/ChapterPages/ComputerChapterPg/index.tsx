import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import { responsiveSpacing } from 'styles/chakraTheme';
import './computer-chapter-pg.scss';

interface Props {
  heading?: string;
}

const ComputerChapterPg = (props: Props) => {
  return (
    <>
      <Box p={responsiveSpacing}></Box>
    </>
  );
};

export default ComputerChapterPg;
