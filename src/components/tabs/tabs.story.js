import React from 'react';

import { Tabs } from '../..';

export const Default = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.Tab active>Tab 1</Tabs.Tab>
      <Tabs.Tab>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
      <Tabs.Tab>Tab 4</Tabs.Tab>
    </Tabs>
  );
};

Default.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['default', 'boxed', 'toggle', 'toggle-rounded'],
    },
  },
  fullwidth: {
    control: {
      type: 'boolean',
    },
  },
  align: {
    control: {
      type: 'select',
      options: ['center', 'right'],
    },
  },
};
