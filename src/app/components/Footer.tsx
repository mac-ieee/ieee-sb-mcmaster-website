import {
  Container,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  VStack,
  Box,
  DarkMode,
  HStack,
  Image,
  Spacer,
  Button,
  IconButton,
  Link,
  Wrap,
} from '@chakra-ui/react';
import { contactInfo, socialInfo } from 'app/data/data';
import React from 'react';
import { Logo } from 'assets/logos/logos';
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from 'react-icons/ri';
interface Props {}

const Footer = (props: Props) => {
  const renderSocialInfo = () => {
    return (
      <Wrap>
        {Object.keys(socialInfo).map(key => {
          let icon;
          switch (key) {
            case 'facebook':
              icon = <RiFacebookFill />;
              break;
            case 'insta':
              icon = <RiInstagramFill />;
              break;
            case 'linkedin':
              icon = <RiLinkedinFill />;
              break;
            default:
              break;
          }
          return (
            <IconButton
              icon={icon}
              //variant="outline"
              variant="outline"
              aria-label={key}
              as={Link}
              href={socialInfo[key]}
              size="sm"
              isRound
            />
          );
        })}
      </Wrap>
    );
  };

  const renderContactInfo = () => {
    return (
      <Box>
        {Object.keys(contactInfo).map(key => {
          return (
            <Text>
              <span style={{ fontWeight: 'bold' }}>{key}</span>:{' '}
              {contactInfo[key]}
            </Text>
          );
        })}
      </Box>
    );
  };
  return (
    <VStack bg="blackAlpha.100" spacing={0}>
      <VStack p={8} w="100%">
        <Container py={4}>
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={8}
            placeItems="center"
          >
            <VStack alignItems="flex-start" spacing={4}>
              <Image src={Logo} w="100px" filter="grayscale(100%)" />
              <Heading size="md">IEEE McMaster Student Branch</Heading>
              {renderContactInfo()}
              {renderSocialInfo()}
            </VStack>
          </SimpleGrid>
        </Container>
      </VStack>
      {/* <Flex>
        <Container py={4}>
          <SimpleGrid
            opacity="0.5"
            alignItems="center"
            columns={{ base: 1, sm: 2, md: 2 }}
            spacing={8}
          >
            <Image
              style={{ filter: 'grayscale(100%) contrast(300%)' }}
              w="250px"
              src={EceImage}
            />
            <Image
              style={{ filter: 'grayscale(100%) contrast(300%)' }}
              w="250px"
              src={IeeeImg}
            />
          </SimpleGrid>
        </Container>
      </Flex> */}
      <Flex w="100%" borderTop="1px solid" borderColor="blackAlpha.300">
        <Container
          as={Flex}
          // as={VStack}
          py={4}
          // direction={{ base: 'column', md: 'row' }}
          flexDir="row"
          spacing={4}
          // justify={{ md: 'space-between' }}
          alignItems="center"
        >
          <Text>
            ©2021 IEEE McMaster Student Branch. 
            
            {/* Developed by{' '}
            <span>
              <Link href="https://felixha00.github.io">Felix Ha</Link>
            </span> */}
          </Text>
          <Spacer />
        </Container>
      </Flex>
    </VStack>
  );
};

export default Footer;
