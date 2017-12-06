import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

import Dropdown from '.';


storiesOf('Dropdown', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <Dropdown
      color={select('Color', {
        '': 'default',
        primary: 'primary',
        success: 'success',
        info: 'info',
        warning: 'warning',
        danger: 'danger',
        light: 'light',
        dark: 'dark',
        white: 'white',
        black: 'black',
        link: 'link',
      }, '')}
      hoverable={boolean('Hoverable', false)}
    >
      <Dropdown.Item value="item" >
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">
        With divider
      </Dropdown.Item>
    </Dropdown>
  )));
