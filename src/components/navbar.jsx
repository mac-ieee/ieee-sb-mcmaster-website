import { Box, Flex, Heading, IconButton, Spacer, Image } from "@chakra-ui/react";
import React from "react";
import { IconMenu } from '@tabler/icons';
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Link from "next/link";


const navbarName = 'IEEE McMaster Student Branch'

const Navbar = () => {
  return <Flex alignItems="center" bg="whiteAlpha.800" borderBottom="1px solid" borderBottomColor={"common.borderColor"}>
    <Link href="/" passHref>
      <Flex p={2} alignItems="center" as="a">
        <Image src="/assets/ieee-sb-mcmaster-logo.png" alt="IEEE SB McMaster Logo" boxSize="6" mr="2" />
        <Prose>
          <Heading as="h3" color="ieee.primary" my="0 !important">{navbarName}</Heading>
        </Prose>
      </Flex>
    </Link>
    <Spacer />
    <IconButton rounded="none" variant="secondary" size="lg" w="50px" icon={<IconMenu />} aria-label="Navbar Menu" title="Navbar Menu" />
  </Flex>
};

export default Navbar;
