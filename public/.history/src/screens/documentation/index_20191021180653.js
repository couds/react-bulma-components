import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { Container, Columns, Heading, Menu } from 'react-bulma-components';

import Item from './components/item';
import ContainerDoc from './sections/container';

const Documentation = ({ match }) => (
  <Container fluid style={{ marginTop: '2rem' }}>
    <Columns>
      <Columns.Column size={2} desktop={{ offset: 1 }}>
        <Menu>
          <Menu.List title="Layout">
            <Link renderAs={Menu.List.Item} to={`${match.url}/container`}>Container</Link>
          </Menu.List>
        </Menu>
      </Columns.Column>
      <Columns.Column>
        <Route exact path="/">
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

Documentation.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Documentation;
