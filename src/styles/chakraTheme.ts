import {
  extendTheme,
  ThemeConfig,
  withDefaultSize,
  withDefaultProps,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const responsiveSpacing = {
  lg: 6,
  base: 4,
};
const theme = extendTheme(
  withDefaultProps({
    defaultProps: {
      spacing: { lg: 8, base: 4 },
    },
    components: ['Stack', 'VStack', 'HStack'],
  }),
  withDefaultSize({
    size: 'lg',
    components: ['Input', 'Button'],
  }),
  {
    colors: {
      brand: {
        primary: '#750035', // maroon
        darkprimary: '#4f0023',
        secondary: '#FBB93E', // yellow
        satSecondary: '#FCA400',
      },
      ieee: {
        primary: '#124982',
      },
      chapters: {
        pes: '#FFBE2A',
      },
    },
    components: {
      Select: {
        baseStyle: {
          field: {
            backgroundColor: 'white',

            _hover: {
              boxShadow: 'xl',
            },
          },
        },
      },
      Modal: {
        // setup light/dark mode component defaults
        baseStyle: props => ({
          dialog: {
            bg: mode('gray.100', '#141214')(props),
            fontSize: 'md',
          },
        }),
        defaultProps: {
          isCentered: true,
        },
      },
      Text: {
        baseStyle: props => ({
          fontSize: { base: 'sm', md: 'md' },
          color: mode('blackAlpha.700', 'whiteAlpha.800')(props),
        }),
        defaultProps: props => ({
          color: mode('blackAlpha.700', 'whiteAlpha.800')(props),
        }),
      },
      Heading: {
        baseStyle: props => ({
          fontSize: { base: 'lg', md: '2xl' },
          color: mode('black', 'white')(props),
        }),
      },
      FormLabel: {
        baseStyle: {
          fontSize: '14px',
        },
      },
      Input: {
        baseStyle: {
          fontSize: '14px',
        },
      },
      Container: {
        baseStyle: {
          maxW: 'container.xl',
        },
      },
      VStack: {
        defaultProps: {
          spacing: 8,
        },
      },
      Button: {
        baseStyle: {
          fontWeight: 'normal',
          fontSize: 'md',
        },
        defaultProps: {
          fontSize: 'md',
        },
        variants: {
          primary: {
            bg: 'brand.primary',
            color: 'white',
            _hover: {
              bg: 'brand.darkprimary',
            },
          },
          secondary: {
            bg: 'brand.secondary',
            color: 'brand.primary',
            _hover: {
              bg: 'brand.satSecondary',
            },
          },
          outline: props => ({
            borderColor: mode('blackAlpha.700', 'whiteAlpha.700')(props),
            _hover: {
              bg: mode('black', 'white')(props),
              color: mode('white', 'black')(props),
              boxShadow: 'xl',
            },
          }),
        },
      },
      TabPanel: {
        baseStyle: {
          padding: 0,
        },
        defaultProps: {
          p: 0,
        },
      },
    },
    fonts: {
      heading: 'Manrope',
      body: 'Inter',
    },
    styles: {
      global: props => ({
        body: {
          bg: mode('#F5F5F7', '#141214')(props),
          color: mode('blackAlpha.800', 'whiteAlpha.900')(props),
        },
        select: {
          backgroundColor: 'white',
        },
        h1: {
          fontWeight: 900,
          color: mode('black', 'white')(props),
          fontSize: ['3xl', '4xl', '5xl', '5xl'],
        },
      }),
    },
    config,
  },
);
export default theme;
