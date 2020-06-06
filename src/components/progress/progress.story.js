import React from 'react';

import { storiesOf } from '@storybook/react';

import Progress from 'react-bulma-components/lib/components/progress';

storiesOf('Progress', module).add('Default', () => (
  <div>
    <Progress />
    <Progress max={100} value={15} color="primary" size="small" />
    <Progress max={100} value={15} color="info" />
    <Progress max={100} value={15} color="success" size="medium" />
    <Progress max={100} value={15} color="danger" size="large" />
  </div>
));
