import React from 'react';

import { storiesOf } from '@storybook/react';

import Heading from '.';

storiesOf('Heading', module)
  .add('Default', () => (
    <div>
      <div>
        <Heading>
          Title
        </Heading>
        <Heading subtitle>
          Subtitle
        </Heading>
      </div>
      <div>
        <Heading size={1}>
          Title
        </Heading>
        <Heading subtitle size={1}>
          Subtitle
        </Heading>
      </div>
      <div>
        <Heading size={2}>
          Title
        </Heading>
        <Heading subtitle size={2}>
          Subtitle
        </Heading>
      </div>
      <div>
        <Heading size={3}>
          Title
        </Heading>
        <Heading subtitle size={3}>
          Subtitle
        </Heading>
      </div>
      <div>
        <Heading size={4}>
          Title
        </Heading>
        <Heading subtitle size={4}>
          Title
        </Heading>
      </div>
      <div>
        <Heading size={5}>
          Title
        </Heading>
        <Heading subtitle size={5}>
          Subtitle
        </Heading>
      </div>
      <div>
        <Heading size={6}>
          Title
        </Heading>
        <Heading subtitle size={6}>
          Subtitle
        </Heading>
      </div>
    </div>
  ));
