import React from 'react';
import { Container, Columns, Menu } from 'react-bulma-components';

import Item from './components/item';
import { Heading } from 'react-bulma-components/lib';

const Documentation = () => (
  <Container>
    <Columns>
    <Columns.Column size="one-fifth" desktop={{ offset: 1 }}>
      <Menu>
        <Menu.List title="components">
          <M  enu.List.Item>Button</Menu.List.Item>
        </Menu.List>
      </Menu>
    </Columns.Column>
    <Columns.Column>
      <Heading>
        Documentation
      </Heading>
      <Heading subtitle size={4} renderAs="p">
        All you need to build your siteasdsadsadsadasdsadsadsad
      </Heading>
    </Columns.Column>
  </Columns>
  </Container>
);

export default Documentation;
