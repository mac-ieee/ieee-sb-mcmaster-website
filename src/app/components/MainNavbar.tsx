import {
  Box,
  Link as CLink,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  VStack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import './Navbar/navbar.scss';
import { useEffect, useState } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
export default function MainNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showScrollStyle, setShowScrollStyle] = useState(false);
  const btnRef = React.useRef();
  const closeRef = React.useRef();
  const history = useHistory();

  const handleScroll = () => {
    setTimeout(() => {
      if (window.scrollY > 200 && !showScrollStyle) {
        setShowScrollStyle(true);
      } else {
        setShowScrollStyle(false);
      }
    }, 500);
  };

  useEffect(() => {}, [history]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <Box>
      <Flex
        className="main-navbar"
        bg="whiteAlpha.800"
        color={useColorModeValue('gray.600', 'white')}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        zIndex="999"
      >
        <Flex
          //flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onOpen}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            ref={btnRef}
            size="sm"
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex alignItems="center" flex={{ base: 1 }} justify="start">
          <Heading
            as={Link}
            to="/"
            size="md"
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            // color={useColorModeValue('gray.800', 'white')}
            display={{ base: 'none', md: 'block' }}
            color="brand.primary"
          >
            IEEE {showScrollStyle ? 'MSB' : 'McMaster Student Branch'}
          </Heading>

          <Spacer />
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="white">
          <VStack>
            <Flex
              className={'main-navbar-h'}
              py={{ base: 2 }}
              px={{ base: 4 }}
              alignSelf="flex-start"
              alignItems="center"
            >
              <Heading
                to="/"
                size="md"
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                // color={useColorModeValue('gray.800', 'white')}
                color="brand.primary"
              >
                IEEE MSB
              </Heading>
              <Spacer />
              <DrawerCloseButton ref={closeRef} />
            </Flex>
            <VStack display={{ md: 'none' }} spacing={0} w="100%">
              {NAV_ITEMS.map(navItem => (
                <MobileNavItem
                  key={navItem.label}
                  onClose={onClose}
                  {...navItem}
                />
              ))}
            </VStack>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  const CLinkColor = useColorModeValue('gray.600', 'gray.200');
  const CLinkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={0}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Button
                as={Link}
                colorScheme="blackAlpha"
                variant="ghost"
                size="sm"
                to={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color="black"
              >
                {navItem.label}
              </Button>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <CLink
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </CLink>
  );
};

const MobileNav = () => {
  return (
    <VStack display={{ md: 'none' }} spacing={0} w="100%">
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </VStack>
  );
};

const MobileNavItem = ({ label, children, href, onClose }: NavItem) => {
  const history = useHistory();

  const handleLinkClick = href => {
    history.push(href);
    onClose();
  };
  return (
    <>
      <Button
        w="inherit"
        size="lg"
        px={4}
        onClick={() => handleLinkClick(href)}
        variant="ghost"
        fontWeight={600}
        justifyContent="flex-start"
        color={useColorModeValue('gray.600', 'gray.200')}
      >
        {label}
      </Button>
      {/* {children && (
        <Icon
          as={ChevronDownIcon}
          transition={'all .25s ease-in-out'}
          transform={isOpen ? 'rotate(180deg)' : ''}
          w={6}
          h={6}
        />
      )}

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <CLink key={child.label} py={2} href={child.href}>
                {child.label}
              </CLink>
            ))}
        </Stack>
      </Collapse> */}
    </>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  onClose?: () => void;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  //   {
  //     label: 'Find Work',
  //     children: [
  //       {
  //         label: 'Job Board',
  //         subLabel: 'Find your dream design job',
  //         href: '#',
  //       },
  //       {
  //         label: 'Freelance Projects',
  //         subLabel: 'An exclusive list for contract work',
  //         href: '#',
  //       },
  //     ],
  //   },
  //   {
  //     label: 'Learn Design',
  //     href: '#',
  //   },
  //   {
  //     label: 'Hire Designers',
  //     href: '#',
  //   },
];
