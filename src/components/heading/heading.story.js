import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Heading from '.';
import Box from '../box';

storiesOf('Heading', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo()(() => (
    <div>
      <Box>
        <Heading>
          Title
        </Heading>
        <Heading subtitle size={6}>
          Subtitle
        </Heading>
      </Box>
      <Box>
        <Heading size={1}>
          Title
        </Heading>
        <Heading subtitle size={3}>
          Subtitle
        </Heading>
      </Box>
      <Box>
        <Heading size={2}>
          Title
        </Heading>
        <Heading subtitle size={4}>
          Subtitle
        </Heading>
      </Box>
      <Box>
        <Heading size={3}>
          Title
        </Heading>
        <Heading subtitle size={5}>
          Subtitle
        </Heading>
      </Box>
      <Box>
        <Heading size={4}>
          Title
        </Heading>
        <Heading subtitle size={6}>
          Title
        </Heading>
      </Box>
    </div>
  )));
