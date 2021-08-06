import { VStack, Box, Heading, Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import '../about-us.scss';

interface Props {
  role: string;
  name: string;
}

const MemberCard = (props: Props) => {
  const { role, name } = props;
  return (
    <VStack
      className="rounded hover-line member-card"
      p={8}
      spacing={8}
      bg="blackAlpha.50"
      bgGradient="linear(to-b, blackAlpha.50, whiteAlpha.300)"
      textAlign="center"
    >
      <Avatar color="white" bg="brand.primary" size="2xl" name={name} />
      <Box>
        <Heading size="md">{name}</Heading>
        <Text>{role}</Text>
      </Box>
    </VStack>
  );
};

export default MemberCard;
