import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon } from '../icon';

storiesOf('Icon', module)
  .add('Default', () => (
    <div>
      <Icon icon="bars" color="info" />
      <Icon icon="angle-down" />
    </div>
  ))
  .add('Custom Icon', () => (
    <div>
      <Icon>
        <span className="rbc rbc-bars" />
      </Icon>
    </div>
  ));
