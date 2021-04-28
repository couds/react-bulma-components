import React from 'react';

import { storiesOf } from '@storybook/react';

import { Loader } from '../..';

storiesOf('Loader', module)
  .add('Default', () => {
    return <Loader />;
  })
  .add('with inline style', () => {
    return (
      <Loader
        style={{
          width: 300,
          height: 300,
          border: '4px solid blue',
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
        }}
      />
    );
  })
  .add('with other classes', () => {
    return <Loader className="loader-override" />;
  });
