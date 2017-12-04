import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './readme.md';

import Box from '.';
import Media from '../media';
import Image from '../image';
import Content from '../content';

storiesOf('Box', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('Default', withReadme(readme, () => (
    <Box>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </Media.Item>
        <Media.Item>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  )));
