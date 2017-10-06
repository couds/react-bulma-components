import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import './loader.story.sass';
import Loader from '.';

storiesOf('Loader', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo()(() => (
    <Loader />
  )))
  .add('with inline style', withInfo()(() => (
    <Loader style={{ width: 300, height: 300, border: '4px solid blue', borderTopColor: 'transparent', borderRightColor: 'transparent' }} />
  )))
  .add('with other classes', withInfo()(() => (
    <Loader className="loader-override" />
  )));
