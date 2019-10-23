import React from 'react';

import { storiesOf } from '@storybook/react';

import Menu from 'react-bulma-components/lib/components/menu';

storiesOf('Menu', module).add('Default', () => (
  <Menu>
    <Menu.List title="General">
      <Menu.List.Item>Dashboard</Menu.List.Item>
      <Menu.List.Item>Customer</Menu.List.Item>
    </Menu.List>

    <Menu.List title="Administration">
      <Menu.List.Item>Team Settings</Menu.List.Item>
      <Menu.List.Item active>
        <Menu.List title="Manage Your Team">
          <Menu.List.Item>Members</Menu.List.Item>
          <Menu.List.Item active>Plugins</Menu.List.Item>
          <Menu.List.Item>Add a member</Menu.List.Item>
        </Menu.List>
      </Menu.List.Item>
      <Menu.List.Item>Invitations</Menu.List.Item>
      <Menu.List.Item>Cloud Storage Environment Settings</Menu.List.Item>
      <Menu.List.Item>Authentication</Menu.List.Item>
    </Menu.List>
    <Menu.List title="Transactions">
      <Menu.List.Item>Payments</Menu.List.Item>
      <Menu.List.Item>Transfers</Menu.List.Item>
      <Menu.List.Item>Balance</Menu.List.Item>
    </Menu.List>
  </Menu>
));
