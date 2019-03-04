import React, { useState, useEffect } from 'react';
import Element from 'react-bulma-components/lib/components/element';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Hero from 'react-bulma-components/lib/components/hero';
import Footer from 'react-bulma-components/lib/components/footer';
import Icon from 'components/icon';
import Link from 'components/link';
import RouterLink from 'react-router-dom/Link';
import logo from 'images/logo.png';
import { FormattedMessage, defineMessages } from 'react-intl';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import { Heading } from 'react-bulma-components';

import './layout.scss';

const messages = defineMessages({
  gettingStarted: {
    id: 'getting started',
    defaultMessage: 'Getting Started',
  },
  documentation: {
    id: 'documentation',
    defaultMessage: 'Documentation',
  },
  home: {
    id: 'home',
    defaultMessage: 'Home',
  }
});

const Layout = ({ children, currentPath }) => {
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

  const path = currentPath.split('/').filter(x => x).slice(1).join('/');

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
          <Navbar.Item rel="noopener noreferrer" target="_blank" href="https://github.com/couds/react-bulma-components" responsive={{ desktop: { hide: { value: true }}}}>
            <Icon icon="github-alt" />
          </Navbar.Item>
          <Navbar.Burger id="show-menu" onClick={toggleNavbar} />
        </Navbar.Brand>
        <Navbar.Container position="end">
          <Navbar.Menu>
            <Navbar.Item renderAs={Link} to="/getting-started" activeClassName="is-active">
              <Icon icon="rocket" size="small" />
              <FormattedMessage {...messages.gettingStarted} />
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to="/documentation"  activeClassName="is-active">
              <Icon icon="books" size="small" />
              <FormattedMessage {...messages.documentation} />
            </Navbar.Item>
            <Navbar.Item renderAs="span" hoverable responsive={{ touch: { hide: { value: true }}}}>
              <Navbar.Link arrowless>
                <Icon icon="earth" />
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item renderAs={RouterLink} to={['/en'].concat(path).join('/')}>EN</Navbar.Item>
                <Navbar.Item renderAs={RouterLink} to={['/es'].concat(path).join('/')}>ES</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item rel="noopener noreferrer" target="_blank" href="https://github.com/couds/react-bulma-components" responsive={{ touch: { hide: { value: true }}}}>
              <Icon icon="github-alt" />
            </Navbar.Item>
          </Navbar.Menu>
        </Navbar.Container>
      </Navbar>
      <Hero hasNavbar>
        <Hero.Body paddingless className="page-body">
          <div style={{ width: '100%' }}>
            {children}
          </div>
        </Hero.Body>
        <Hero.Footer className="page-footer">
          <Footer>
            <Container>
              <Columns>
                <Columns.Column>
                  <Heading size={5}>
                    <Link to="/">
                      <FormattedMessage {...messages.home} />
                    </Link>
                  </Heading>
                  <Heading size={5}>
                    <Link to="/">
                      <FormattedMessage {...messages.gettingStarted} />
                    </Link>
                  </Heading>
                </Columns.Column>
                <Columns.Column>
                  <Heading size={5}>
                    <Link to="/">
                      <FormattedMessage {...messages.documentation} />
                    </Link>
                  </Heading>
                  <Heading heading>
                    <Link to="/">
                      <FormattedMessage {...messages.documentation} />
                    </Link>
                  </Heading>
                </Columns.Column>
                <Columns.Column></Columns.Column>
              </Columns>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </div>
  );
};

export default Layout;
