import "../styles/globals.scss";
import React from "react";
import nprogress from "nprogress";
import router from "next/router";

import "@fontsource/inter/900.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/100.css";

import "@fontsource/apfel-grotezk"
import "@fontsource/ibm-plex-serif";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../styles/chakra-theme";
import Navbar from "../src/components/navbar";
import { DefaultSeo } from "next-seo";
import { default as SEO } from "../config/next-seo.config";
import Footer from "components/footer";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head } from "next/document";

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
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Flex flexDir="column" minHeight={'100vh'}>
          <Navbar />
          <Flex grow="1" flexDir="inherit">
            <Component {...pageProps} />
          </Flex>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
