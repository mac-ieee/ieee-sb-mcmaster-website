import React from 'react';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import {
  Heading,
  VStack,
  Badge,
  SimpleGrid,
  Image,
  Box,
} from '@chakra-ui/react';
import { teamData } from '../schema/teamData';
import MemberCard from '../components/MemberCard';

interface Props {}

export const ChapterHeader = (props: { name: string; logo: any }) => {
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
      <Heading fontSize={{ base: '2xl', lg: '6xl' }} zIndex="1">
        {props.name}
      </Heading>
      <Box
        bgImage={props.logo}
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
const AboutUsTeamPage = (props: Props) => {
  const { teamId } = useParams<any>();
  const { execs, name, logo } = teamData[teamId];
  return (
    <>
      <VStack spacing={{ base: 4, lg: 8 }} alignItems="flex-start">
        <ChapterHeader name={name} logo={logo} />
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
