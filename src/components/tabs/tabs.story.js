import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs } from '../tabs';

storiesOf('Tabs', module)
  .addDecorator(story => <div style={{ margin: 10 }}>{story()}</div>)
  .add('Default', () => (
    <Tabs
      type={select('Tab type', { boxed: 'boxed', toggle: 'toggle', 'toggle-rounded': 'toggle-rounded' }, 'boxed')}
      fullwidth={boolean('Full width', false)}
      align={select('Align', { Default: null, centered: 'centered', right: 'right' })}
    >
      <Tabs.Tab active>Test</Tabs.Tab>
      <Tabs.Tab>Test</Tabs.Tab>
      <Tabs.Tab>Test</Tabs.Tab>
      <Tabs.Tab>Test</Tabs.Tab>
    </Tabs>
  ));
