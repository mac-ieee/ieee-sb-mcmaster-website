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
  Container,
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
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
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
import React from 'react';
import { Logo } from 'assets/logos/logos';
export default function MainNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showScrollStyle, setShowScrollStyle] = useState(false);
  const btnRef = React.useRef();
  const closeRef = React.useRef();
  // const history = useHistory();

  // const handleScroll = () => {
  //   setTimeout(() => {
  //     if (window.scrollY > 200 && !showScrollStyle) {
  //       setShowScrollStyle(true);
  //     } else {
  //       setShowScrollStyle(false);
  //     }
  //   }, 500);
  // };

  // useEffect(() => {}, [history]);
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [handleScroll]);
  return (
    <Box>
      <Flex
        className="main-navbar gmd-2"
        bg="white"
        color={useColorModeValue('black', 'white')}
        py={{ base: 2 }}
        align="center"
        zIndex="999"
      >
        <Container>
          <Flex display={{ base: 'flex', md: 'none' }}>
            <Link to="/">
              <Image src={Logo} w="30px" h="30px" />
            </Link>
            <Spacer />
            <Flex>
              <IconButton
                onClick={onOpen}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                ref={btnRef}
                size="sm"
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
              <Spacer />
            </Flex>
          </Flex>
          <Flex alignItems="center" flex={{ base: 1 }} justify="start">
            <Image
              src={Logo}
              display={{ base: 'none', md: 'block' }}
              w="30px"
              h="30px"
              mr={3}
            />
            <Heading
              as={Link}
              to="/"
              size="md"
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              // color={useColorModeValue('gray.800', 'white')}
              display={{ base: 'none', md: 'block' }}
              color="ieee.primary"
            >
              IEEE McMaster Student Branch
              {/* {showScrollStyle
                ? 'McMaster Student Branch'
                : 'McMaster Student Branch'} */}
            </Heading>

            <Spacer />
            <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
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
              w="100%"
              bg="blackAlpha.50"
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
            <VStack display={{ md: 'none' }} spacing={0} w="100%" p={4}>
              {NAV_ITEMS.map(navItem => (
                <MobileNavItem
                  key={navItem.label}
                  drawerClose={onClose}
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
  // const CLinkColor = useColorModeValue('gray.600', 'gray.200');
  // const CLinkHoverColor = useColorModeValue('gray.800', 'white');
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
                boxShadow={'xl'}
                // border="1px solid blackAlpha.200"
                bg={popoverContentBgColor}
                p={2}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack spacing={0}>
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
      p={1}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blackAlpha.200', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'} spacing={0}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '' }}
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
          <Icon color={'brand.primary'} w={5} h={5} as={ChevronRightIcon} />
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

const MobileNavItem = ({ label, children, href, drawerClose }: NavItem) => {
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLinkClick = () => {
    drawerClose();
    history.push(href);
  };
  return (
    <>
      <Button
        w="inherit"
        size="md"
        px={4}
        onClick={children ? (isOpen ? onClose : onOpen) : handleLinkClick}
        variant="ghost"
        fontWeight={600}
        justifyContent="flex-start"
        color={useColorModeValue('gray.600', 'gray.200')}
        rightIcon={children ? <ChevronDownIcon /> : null}
      >
        {label}
      </Button>

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
      </Collapse>
    </>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  drawerClose?: () => void;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'Chapters',
    children: [
      {
        label: 'Main Branch',
        href: '/chapters/main-branch',
      },
      {
        label: 'Computer',
        href: '/chapters/computer',
      },
      {
        label: 'Power and Energy Society',
        href: '/chapters/power-and-energy-society',
      },
      {
        label: 'Engineering In Medicine & Biology Society',
        href: '/chapters/engineering-in-medicine-and-biology-society',
      },
    ],
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
