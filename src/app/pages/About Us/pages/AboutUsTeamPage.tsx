import React from 'react';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { Heading, VStack, SimpleGrid, Box } from '@chakra-ui/react';
import { teamData } from 'data/teamData';
import MemberCard from '../components/MemberCard';
import ChapterHeader from 'app/components/ChapterHeader';
import { responsiveSpacing } from 'styles/chakraTheme';
interface Props {}

const AboutUsTeamPage = (props: Props) => {
  const { teamId } = useParams<any>();
  const { execs } = teamData[teamId];
  return (
    <>
      <VStack spacing={responsiveSpacing} alignItems="flex-start">
        <ChapterHeader id={teamId} />
        <Heading size="lg" bgGradient="linear(to-r, black,black)" bgClip="text">
          Executives
        </Heading>

        <SimpleGrid
          w="100%"
          columns={{ base: 1, sm: 2, md: 4, lg: 5 }}
          spacing={responsiveSpacing}
        >
          {Object.keys(execs).map((key: any) => {
            return <MemberCard name={key} role={execs[key].role} />;
          })}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default AboutUsTeamPage;
