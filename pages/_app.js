import "../styles/globals.css";
import React from "react";
import nprogress from "nprogress";
import router from "next/router";

import "@fontsource/inter";
import "@fontsource/ibm-plex-serif";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/chakra-theme";
import Navbar from "../src/components/navbar";
import { DefaultSeo } from "next-seo";
import { default as SEO } from "../config/next-seo.config";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const handleRouteStart = () => nprogress.start();
    const handleRouteDone = () => nprogress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
