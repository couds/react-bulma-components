import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { Container, Columns, Heading, Menu } from 'react-bulma-components';

// import Item from './components/item';
import { Sections } from './constants';
import ContainerDoc from './sections/container';

const Documentation = ({ location, match }) => {
  const renderMenuItems = () => Object.keys(Sections).map(section => (
    <Menu.List key={section} title={section}>
      {Sections[section].map(({ name: componentName }) => {
        const componentNameLower = componentName.toLowerCase();
        const path = `${match.url}/${componentNameLower}`;

        return (
          <Link
            to={path}
            active={location.pathname === path}
            renderAs={Menu.List.Item}>
            {componentName}
          </Link>
        );
      })}
    </Menu.List>
  ))

  return (
    <Container fluid style={{ marginTop: '2rem' }}>
      <Columns>
        <Columns.Column size={2} desktop={{ offset: 1 }}>
          <Menu>
            {renderMenuItems()}
          </Menu>
        </Columns.Column>
        <Columns.Column>
          <Route exact path={match.url}>
            <Heading>
              Documentation
            </Heading>
            <Heading subtitle size={4} renderAs="p">
              All you need to build your site
            </Heading>
          </Route>
          <Route exact path={`${match.url}/container`} component={ContainerDoc} />
        </Columns.Column>
      </Columns>
    </Container>
  );
};

Documentation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Documentation;
