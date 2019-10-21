import React from 'react';
import { Container, Columns, Menu } from 'react-bulma-components';

import Item from './components/item';
import { Heading } from 'react-bulma-components/lib';

const Documentation = () => (
  <Columns>
      <Columns.Column size="one-third" style={{ position: 'fixed', top: 52,  bottom: 0 }}>
        <Menu>
          <Menu.List title="components">
            <Menu.List.Item>Button</Menu.List.Item>
          </Menu.List>
        </Menu>
      </Columns.Column>
      <Columns.Column desktop={{ offset: 3 }}>
        <Heading>
          Documentation
        </Heading>
        <Heading subtitle size={4} renderAs="p">
          All you need to build your siteasdsadsadsadasdsadsadsad
        </Heading>
      </Columns.Column>
    </Columns>
);

export default Documentation;
