import { storiesOf } from '@storybook/react';
import React from 'react';
import { Loader } from '../loader';

storiesOf('Loader', module)
  .add('Default', () => <Loader onClick={() => {}} />)
  .add('with overlay', () => <Loader overlay onClick={() => {}} />);
