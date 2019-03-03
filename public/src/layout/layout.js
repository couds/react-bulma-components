import React, { useState, useEffect } from 'react';
import Element from 'react-bulma-components/lib/components/element';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Hero from 'react-bulma-components/lib/components/hero';
import Icon from 'components/icon';
import Link from 'components/link';
import RouterLink from 'react-router-dom/Link';
import logo from 'images/logo.png';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  gettingStarted: {
    id: 'getting started',
    defaultMessage: 'Getting Started',
  },
  documentation: {
    id: 'documentation',
    defaultMessage: 'Documentation',
  },
});

const Layout = ({ children, setLocale }) => {
  const [navbarActive, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbarActive);
  };
  useEffect(() => {
    const hideMenu = (evt) => {
      if (evt.target.id === 'show-menu') {
        return;
      }
      setNavbar(false);
    };
    document.addEventListener('click', hideMenu);
    return () => {
      document.removeEventListener('click', hideMenu);
    };
  });
  return (
    <div className="app">
      <Navbar fixed="top" active={navbarActive}>
        <Navbar.Brand>
          <Link style={{ marginRight: 20, flexDirection: 'row' }} to="/"  className="is-vertically-centered" >
            <img src={logo} alt="logo" style={{ height: 48 }} />
            <Element textColor="dark" renderAs="b">
              RBC
            </Element>
          </Link>
          <Navbar.Item href="https://github.com/couds/react-bulma-components" responsive={{ desktop: { hide: { value: true }}}}>
            <Icon icon="github-alt" />
          </Navbar.Item>
          <Navbar.Burger id="show-menu" onClick={toggleNavbar} />
        </Navbar.Brand>
        <Navbar.Container position="end">
          <Navbar.Menu>
            <Navbar.Item renderAs={Link} to="/getting-started">
              <FormattedMessage {...messages.gettingStarted} />
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to="/documentation">
            <FormattedMessage {...messages.documentation} />
            </Navbar.Item>
            <Navbar.Item renderAs="span" hoverable responsive={{ touch: { hide: { value: true }}}}>
              <Navbar.Link arrowless>
                <Icon icon="earth" />
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item renderAs={RouterLink} to="/en">EN</Navbar.Item>
                <Navbar.Item renderAs={RouterLink} to="/es">ES</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="https://github.com/couds/react-bulma-components" responsive={{ touch: { hide: { value: true }}}}>
              <Icon icon="github-alt" />
            </Navbar.Item>
          </Navbar.Menu>
        </Navbar.Container>
      </Navbar>
      <Hero hasNavbar>
        <Hero.Body paddingless style={{ flexDirection: 'column' }}>
          {children}
        </Hero.Body>
      </Hero>
    </div>
  );
};

export default Layout;
