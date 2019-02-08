import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon } from '../icon';

storiesOf('Icon', module)
  .add('Default', () => (
    <div>
      <Icon icon="star" color="info" />
      <Icon icon="shield-account" />
    </div>
  ))
  .add('Custom Icon', () => (
    <div>
      <Icon>
        <span className="mdi mdi-menu mdi-48px" />
      </Icon>
    </div>
  ));
