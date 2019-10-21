import React from 'react';
import PropTypes from 'prop-types';
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
        <Heading>
          Documentation
        </Heading>
        <Heading subtitle size={4} renderAs="p">
          All you need to build your site
        </Heading>
      </Columns.Column>
    </Columns>
  </Container>
);

Documentation.propTypes = {
  match: PropTypes.shape({
    
  })
}

export default Documentation;
