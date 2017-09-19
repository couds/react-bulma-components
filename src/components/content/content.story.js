import React from 'react';

import { storiesOf } from '@storybook/react';

import Content from '.';

storiesOf('Content', module)
  .add('Default', () => (
    <Content>
      <p>Lorep ipsum</p>
      <a href="https://google.com">Google</a>
    </Content>
  ));
