import React from 'react';

import { storiesOf } from '@storybook/react';

import Progress from '.';

storiesOf('Progress', module)
  .add('Default', () => (
    <div>
      <Progress max={100} value={15} type="primary" size="small" />
      <Progress max={100} value={15} type="info" />
      <Progress max={100} value={15} type="success" size="medium" />
      <Progress max={100} value={15} type="error" size="large" />
    </div>
  ));
