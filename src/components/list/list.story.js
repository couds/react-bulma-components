import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from 'react-bulma-components/lib/components/box';
import List from 'react-bulma-components/lib/components/list';
import { boolean } from '@storybook/addon-knobs';

storiesOf('List', module).add('Default', () => (
  <Box>
    <List hoverable>
      <List.Item>1</List.Item>
      <List.Item active>1</List.Item>
      <List.Item>1</List.Item>
      <List.Item>1</List.Item>
    </List>
  </Box>
));
