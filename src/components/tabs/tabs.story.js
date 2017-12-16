import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Tabs from '.';

storiesOf('Tabs', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo()(() => (
    <Tabs type="boxed">
      <Tabs.Tab active>
        Test
      </Tabs.Tab>
      <Tabs.Tab>
        Test
      </Tabs.Tab>
      <Tabs.Tab>
        Test
      </Tabs.Tab>
      <Tabs.Tab>
        Test
      </Tabs.Tab>
    </Tabs>
  )));
