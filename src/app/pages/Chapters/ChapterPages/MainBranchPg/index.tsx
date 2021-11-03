import React from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import './main-branch-pg.scss';
import { responsiveSpacing } from 'styles/chakraTheme';
interface Props {}

const MainBranchPg = (props: Props) => {
  return (
    <Stack spacing={responsiveSpacing} className="main-branch-content">
      <Heading>asd</Heading>
    </Stack>
  );
};

export default MainBranchPg;
