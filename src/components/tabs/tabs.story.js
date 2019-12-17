import React from 'react';

import { storiesOf } from '@storybook/react';

import { select, boolean } from '@storybook/addon-knobs';
import Tabs from 'react-bulma-components/lib/components/tabs';

storiesOf('Tabs', module)
  .addDecorator(story => <div style={{ margin: 10 }}>{story()}</div>)
  .add('Default', () => (
    <Tabs
      type={select(
        'Tab type',
        {
          boxed: 'boxed',
          toggle: 'toggle',
          'toggle-rounded': 'toggle-rounded',
        },
        'boxed',
      )}
      fullwidth={boolean('Full width', false)}
      align={select('Align', {
        Default: undefined,
        centered: 'centered',
        right: 'right',
      })}
    >
      <Tabs.Tab active>Test</Tabs.Tab>
      <Tabs.Tab>Test</Tabs.Tab>
      <Tabs.Tab>Test</Tabs.Tab>
      <Tabs.Tab>Test</Tabs.Tab>
    </Tabs>
  ));
