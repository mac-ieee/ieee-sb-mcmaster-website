import { Box, Container, Flex, Text, DarkMode } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  Redirect,
} from 'react-router-dom';
import AboutUsTeamPage from './pages/AboutUsTeamPage';

interface Props {}

const teams = {
  'About Us': null,
  'Main Branch': 'main-branch',
  Computer: 'computer',
  PES: 'power-and-energy-society',
  EMBS: 'engineering-in-medicine-and-biology-society',
};

const AboutUs = (props: Props) => {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="About the IEEE McMaster Student Branch"
        />
      </Helmet>

      <Switch>
        <Box className="navbar-offset">
          <DarkMode>
            <Flex
              className="about-us-teams-navbar"
              w="100%"
              color="white"
              bg="black"
              justify="center"
              zIndex="999"
              p={2}
            >
              {Object.keys(teams).map(key => {
                let color;
                if (location.pathname === `${url}/${teams[key]}`) {
                  color = 'brand.secondary';
                }
                const url2 = teams[key] ? `${url}/${teams[key]}` : `${url}`;
                return (
                  <Text color={color} as={Link} to={url2} mr={3}>
                    {key}
                  </Text>
                );
              })}
            </Flex>
          </DarkMode>
          <Container maxW="container.xl" my={8}>
            <Route exact path={path}>
              <Redirect to={`${path}/main-branch`} />
            </Route>
            <Route path={`${path}/:teamId+`}>
              <AboutUsTeamPage />
            </Route>
          </Container>
        </Box>
      </Switch>
    </>
  );
};

export default AboutUs;
