/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider } from 'react-intl';
import LocaleContext from 'locales/context';

import Navbar from 'react-bulma-components/lib/components/navbar';
import Hero from 'react-bulma-components/lib/components/hero';
import Element from 'react-bulma-components/lib/components/element';
import Container from 'react-bulma-components/lib/components/container';

import 'react-bulma-components/lib/index.sass';
import Image from './image';
import './layout.scss';

const Layout = ({ children }) => (
  <IntlProvider>
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand className="is-vertically-centered">
          <Image />
          <Element textColor="primary" renderAs="b">
          RBC
          </Element>
        </Navbar.Brand>
        <Navbar.Container position="end">
          <Navbar.Item>
            Getting Started
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Burger />
      </Container>
    </Navbar>
    <Hero size="fullheight" hasNavbar={false}>
      <Hero.Body>
        <div>
          <Image />
          {children}
        </div>
      </Hero.Body>
      <Hero.Footer>
        TEST
      </Hero.Footer>
    </Hero>
  </IntlProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
