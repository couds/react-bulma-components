import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Container, Columns, Menu } from 'react-bulma-components';

import Item from './components/item';
import { Heading } from 'react-bulma-components/lib';

const Documentation = ({ match }) => (
  <Container fluid style={{ marginTop: '2rem' }}>
    <Columns>
      <Columns.Column size={2} desktop={{ offset: 1 }}>
        <Menu>
          <Menu.List title="Layout">
            <Menu.List.Item>Container</Menu.List.Item>
          </Menu.List>
        </Menu>
      </Columns.Column>
      <Columns.Column>
        <Route>

        </Route>
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
