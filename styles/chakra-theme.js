import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
// declare global {
//   namespace globalThis {
//     var PADDING: Record<string, number>;
//   }
// }

// globalThis.PADDING = { base: 4, md: 8 };

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `"Inter", sans-serif`,
};

const buttonVariants = {
  primary: {
    bg: "brand.primary",
    color: "white",
    _hover: {
      bg: "brand.darkprimary",
    },
  },
  secondary: {
    bg: "brand.secondary",
    color: "brand.primary",
    _hover: {
      bg: "brand.satSecondary",
    },
  },
};
const colors = {
  brand: {
    primary: "#750035", // maroon
    darkprimary: "#4f0023",
    secondary: "#FBB93E", // yellow
    satSecondary: "#FCA400",
  },
  common: {
    borderColor: "blackAlpha.100",
  },
  ieee: {
    primary: "#124982",
  },
  chapters: {
    pes: "#FFBE2A",
  },
};

const styles = {
  styles: {
    global: {
      body: {
        // bg: "#fffcf2",
        bg: "#fcfaf4",
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        alignSelf: "center",
        maxW: "container.xl",
        paddingInlineStart: "0rem",
        paddingInlineEnd: "0rem",
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "black",
      },
    },
    Badge: {
      baseStyle: {},
      variants: {
        rounded: {
          borderRadius: "9999px",
          paddingInlineStart: 2,
          paddingInlineEnd: 2,
        },
      },
    },
    IconButton: {
      variants: {
        ...buttonVariants,
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "xl",
        fontWeight: "500",
        fontFamily: "Inter",
      },
      defaultProps: {
        fontSize: "xs",
      },
      sizes: {
        xl: {
          h: 16,
          minW: 16,
          fontSize: "2xl",
          px: 8,
        },
      },
      variants: {
        black: {
          bg: "blackAlpha.900",
          // bgGradient: "linear(to-l, blackAlpha.900, blackAlpha.900)",
          color: "whiteAlpha.900",
          transition: "all 0.2s ease-in-out",
          _hover: {
            bg: "black",
            // bgGradient: "linear(to-l, #7928CA, #FF0080)",
            color: "white",
            transition: "all 0.2s ease-in-out",
          },
        },
        white: {
          bg: "whiteAlpha.900",
          color: "black",
          transition: "all 0.2s ease-in-out",
          _hover: {
            bg: "white",
            color: "black",
            transition: "all 0.2s ease-in-out",
          },
        },
        ...buttonVariants,
      },
    },
  },
};

export const theme = extendTheme(
  {
    ...styles,
    colors,
    fonts,
  },
  withProse()
);
