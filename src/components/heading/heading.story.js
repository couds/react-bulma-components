import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs, number } from '@storybook/addon-knobs';
import readme from './readme.md';

import Heading from '.';
import Box from '../box';

storiesOf('Heading', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <div>
      <Box>
        <Heading size={number('Title', 4, {
          range: true,
          min: 1,
          max: 6,
          step: 1,
        })}
        >
          Title
        </Heading>
        <Heading
          subtitle
          size={number('Subtitle', 6, {
            range: true,
            min: 1,
            max: 6,
            step: 1,
          })}
        >
          Subtitle
        </Heading>
      </Box>
    </div>
  )));
