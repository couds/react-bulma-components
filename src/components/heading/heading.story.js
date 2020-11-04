import React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading, Box } from 'react-bulma-components';

storiesOf('Heading', module).add('Default', () => (
  <div>
    <Box>
      <Heading>Title</Heading>
      <Heading subtitle size={6}>
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={1}>Title</Heading>
      <Heading subtitle size={3}>
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={2}>Title</Heading>
      <Heading subtitle size={4} renderAs="h2">
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={3}>Title</Heading>
      <Heading subtitle size={5} renderAs="h2">
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={4}>Title</Heading>
      <Heading subtitle size={6} renderAs="h2">
        Subtitle
      </Heading>
    </Box>
  </div>
));
