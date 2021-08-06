import React from 'react';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { Box, Flex, Grid, Heading, Text, VStack, Wrap } from '@chakra-ui/react';
import { teamMembers } from '../schema/teamMembers';
import MemberCard from '../components/MemberCard';

interface MemberData {
  role: string;
}
interface Props {}

const AboutUsTeamPage = (props: Props) => {
  const { teamId } = useParams<any>();
  const { execs, name } = teamMembers[teamId];
  return (
    <>
      <VStack spacing={8} alignItems="flex-start">
        <Flex
          p={16}
          className="rounded"
          w="100%"
          bg="brand.secondary"
          color="white"
        >
          <Heading size="3xl">{name}</Heading>
        </Flex>
        <Heading size="xl" bgGradient="linear(to-r, black,black)" bgClip="text">
          Executives
        </Heading>
        <Grid w="100%" templateColumns="repeat(5, 1fr)" gap={8}>
          {Object.keys(execs).map((key: any) => {
            return <MemberCard name={key} role={execs[key].role} />;
          })}
        </Grid>
      </VStack>
    </>
  );
};

export default AboutUsTeamPage;
