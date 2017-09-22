import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Progress from '.';

storiesOf('Progress', module)
  .add('Default', withInfo()(() => (
    <div>
      <Progress max={100} value={15} color="primary" size="small" />
      <Progress max={100} value={15} color="info" />
      <Progress max={100} value={15} color="success" size="medium" />
      <Progress max={100} value={15} color="error" size="large" />
    </div>
  )));
