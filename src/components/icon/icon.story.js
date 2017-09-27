import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Icon from '.';

storiesOf('Icon', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo()(() => (
    <div>
      <Icon icon="bars" color="info" />
      <Icon icon="angle-down" />
    </div>
  )))
  .add('Custom Icon', withInfo()(() => (
    <div>
      <Icon>
        <span className="rbc rbc-bars" />
      </Icon>
    </div>
  )));
