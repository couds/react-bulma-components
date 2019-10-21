import React from 'react';
import { Container, Columns, Menu } from 'react-bulma-components';

import Item from './components/item';
import { Heading } from 'react-bulma-components/lib';

const Documentation = () => (
  <Container style={{ paddingTop: '1.5rem' }}>
    <Columns>
      <Columns.Column>
        <Menu>
          <Menu.List title="components">
            <Menu.List.Item>Button</Menu.List.Item>
          </Menu.List>
        </Menu>
      </Columns.Column>
      <Columns.Column size={8}>
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

export default Documentation;
