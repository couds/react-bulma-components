import React from 'react';

import { storiesOf } from '@storybook/react';

import './loader.story.sass';
import Loader from 'react-bulma-components/lib/components/loader';

storiesOf('Loader', module)
  .add('Default', () => <Loader />)
  .add('with inline style', () => (
    <Loader
      style={{
        width: 300,
        height: 300,
        border: '4px solid blue',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
      }}
    />
  ))
  .add('with other classes', () => <Loader className="loader-override" />);
