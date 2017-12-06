import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs, number } from '@storybook/addon-knobs';
import readme from './readme.md';


import Icon from '.';

storiesOf('Icon', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <div>
      <Icon icon="bars" color="info" />
      <Icon icon="angle-down" />
    </div>
  )))
  .add('Custom Icon', withReadme(readme, () => (
    <div>
      <Icon>
        <i className="rbc rbc-bars" />
      </Icon>
    </div>
  )));
