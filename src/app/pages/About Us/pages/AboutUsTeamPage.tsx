import React from 'react';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { Heading, VStack, Badge, SimpleGrid } from '@chakra-ui/react';
import { teamMembers } from '../schema/teamMembers';
import MemberCard from '../components/MemberCard';

interface Props {}

const AboutUsTeamPage = (props: Props) => {
  const { teamId } = useParams<any>();
  const { execs, name } = teamMembers[teamId];
  return (
    <>
      <VStack spacing={8} alignItems="flex-start">
        <VStack
          p={16}
          className="rounded"
          w="100%"
          bg="brand.secondary"
          color="white"
          alignItems="flex-start"
        >
          {teamId !== 'main-branch' && (
            <Badge colorScheme="blackAlpha">Chapter</Badge>
          )}
          <Heading size="3xl">{name}</Heading>
        </VStack>
        <Heading size="lg" bgGradient="linear(to-r, black,black)" bgClip="text">
          Executives
        </Heading>

        <SimpleGrid
          w="100%"
          columns={{ base: 1, sm: 2, md: 4, lg: 5 }}
          spacing={8}
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
