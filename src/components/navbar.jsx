import { Box, Flex, Heading, IconButton, Spacer, Image, useDisclosure, Icon, Divider, Collapse, Stack } from "@chakra-ui/react";
import React from "react";
import { IconLayoutNavbar, IconMenu } from '@tabler/icons';
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Link from "next/link";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const navbarName = 'IEEE McMaster Student Branch'

const NAV_ITEMS = [
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'Chapters',
    children: [
      {
        label: 'Computer Chapter',
        href: '/chapter/computer',
      },
      {
        label: 'Power and Energy Society',
        href: '/chapter/power-and-energy-society',
      },
      {
        label: 'Engineering In Medicine & Biology Society',
        href: '/chapter/engineering-in-medicine-and-biology-society',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
]

const NavItemHeader = ({ title }) => {
  return <Prose>
    <Heading as="h1" color="blackAlpha.800" _hover={{ ml: 1, color: 'black' }} className="anim-smooth" textTransform="uppercase" my='4 !important'>{title}</Heading>
  </Prose>
}

const NavItemAccordion = ({ navItem, onClose }) => {
  return <Accordion allowToggle>
    <AccordionItem border="none">

      <AccordionButton p={0} _hover={{}}>
        <Box flex="1" textAlign="left">
          <NavItemHeader title={navItem.label} />
        </Box>
        <AccordionIcon boxSize="10" mr={4} />
      </AccordionButton>

      <AccordionPanel pb={4} px={0}>
        <Stack>
          {navItem.children.map((child) => {
            return <Link key={child.label} href={child.href}>
              <a onClick={onClose}>
                <Prose className="anim-smooth" bg="blackAlpha.50" _hover={{ bg: 'blackAlpha.100' }} p={2} px={4} rounded="xl">
                  <Heading my={'2 !important'} as='h3'>{child.label}</Heading>
                </Prose>
              </a>
            </Link>
          })}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
}

const NavItem = (props) => {
  const { navItem } = props

  if (navItem.children !== undefined) {
    return <NavItemAccordion navItem={navItem} onClose={props.onClose} />
  }

  return <Link href={navItem.href || '/'} passHref >
    <a onClick={props.onClose}>
      <NavItemHeader title={navItem.label} />
    </a>
  </Link>
}


function NavbarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton rounded="none" variant="secondary" size="lg" w="50px" icon={<IconMenu />} aria-label="Navbar Menu" title="Navbar Menu" onClick={onOpen} />
      <Drawer
        size={'lg'}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader><Icon as={IconLayoutNavbar} /></DrawerHeader>

          <DrawerBody>
            {NAV_ITEMS.map((item, i) => {
              // if (i !== 0 && i !== NAV_ITEMS.length) {
              //   return <Divider key={i} borderColor="blackAlpha.500" />
              // }
              return <>
                <NavItem key={item.label} navItem={item} onClose={onClose} />
                {<Divider key={i} borderColor="blackAlpha.500" />}
              </>

            })}
            {/* <Input placeholder='Type here...' /> */}
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const Navbar = () => {
  return <Flex alignItems="center" bg="white" borderBottom="1px solid" borderBottomColor={"blackAlpha.300"}>
    <Link href="/" passHref>
      <Flex p={2} alignItems="center" as="a">
        <Image src="/assets/ieee-sb-mcmaster-logo.png" alt="IEEE SB McMaster Logo" boxSize="8" mr="2" />
        <Prose>
          <Heading as="h4" color="ieee.primary" my="0 !important">{navbarName}</Heading>
        </Prose>
      </Flex>
    </Link>
    <Spacer />
    <NavbarDrawer />
  </Flex>
};

export default Navbar;
