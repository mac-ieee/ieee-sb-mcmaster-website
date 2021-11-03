/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { AboutUs } from './pages/About Us/Loadable';
import MainNavbar from './components/MainNavbar';
import { Events } from './pages/Events/Loadable';
import Footer from './components/Footer';
import { Chapters } from './pages/Chapters/Loadable';
import { GlobalStyle } from '../styles/global-styles';
export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s | IEEE McMaster Student Branch"
        defaultTitle="IEEE McMaster Student Branch"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="Welcome to the McMaster IEEE Student Branch!"
        />
      </Helmet>
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/events" component={Events} />
        <Route path="/chapters/:chapterId" component={Chapters} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
