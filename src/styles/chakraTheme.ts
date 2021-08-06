import { extendTheme, ThemeConfig, withDefaultSize } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  // initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme(
  withDefaultSize({
    size: 'md',
    components: ['Button', 'Input'],
  }),
  {
    colors: {
      brand: {
        primary: '#750035', // maroon
        darkprimary: '#4f0023',
        secondary: '#FBB93E', // yellow
      },
    },
    components: {
      Drawer: {
        // setup light/dark mode component defaults
        baseStyle: props => ({
          dialog: {
            bg: mode('gray.100', '#141214')(props),
          },
        }),
      },
      Modal: {
        // setup light/dark mode component defaults
        baseStyle: props => ({
          dialog: {
            bg: mode('gray.100', '#141214')(props),
          },
        }),
        defaultProps: {
          isCentered: true,
        },
      },
      Text: {
        baseStyle: {
          fontSize: 'sm',
        },
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
        },
        variants: {
          primary: {
            bg: 'brand.primary',
            color: 'white',
            _hover: {
              bg: 'brand.darkprimary',
            },
          },
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
        },
        p: {
          color: mode('blackAlpha.700', 'whiteAlpha.900')(props),
        },
      }),
    },
    config,
  },
);
export default theme;
