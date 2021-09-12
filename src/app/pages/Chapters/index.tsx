import React from 'react';
import { Container, Heading, Box } from '@chakra-ui/react';
import { useRouteMatch, useParams } from 'react-router';
import { teamData } from '../About Us/schema/teamData';
import { ChapterHeader } from '../About Us/pages/AboutUsTeamPage';

interface Props {}

const nameMapping = {
  computer: 'Computer',
  'power-and-energy-society': 'Power & Energy Society',
  'engineering-in-medicine-and-biology-society':
    'Engineering In Medicine & Biology Society',
};
const Chapters = (props: Props) => {
  const { chapterId } = useParams<any>();
  const { name, logo } = teamData[chapterId];

  return (
    <>
      <Box className="navbar-offset" />
      <Container py={{ base: 4, lg: 8 }}>
        <ChapterHeader logo={logo} name={name} />
      </Container>
    </>
  );
};

export default Chapters;
