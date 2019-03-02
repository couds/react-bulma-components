import React from 'react';
import Element from 'react-bulma-components/lib/components/element';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';
import Hero from 'react-bulma-components/lib/components/hero';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div className="app">
    <Navbar fixed="top">
    <Container>
      <Navbar.Brand>
        <Link to="/"  className="is-vertically-centered">
          <img src={logo} alt="logo" style={{ height: 48 }} />
          <Element textColor="primary">
            RBC
          </Element>
        </Link>
      </Navbar.Brand>
      <Navbar.Container position="end">
        <Navbar.Item renderAs={Link} to="/getting-started/">
          Getting Started
        </Navbar.Item>
      </Navbar.Container>
      <Navbar.Burger />
    </Container>
    </Navbar>
    <Hero hasNavbar>
      <Hero.Body paddingless>
        {children}
      </Hero.Body>
      <Hero.Footer>
        FOOTER
      </Hero.Footer>
    </Hero>
  </div>
);

export default Layout;
