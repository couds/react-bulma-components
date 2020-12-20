import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Box, Breadcrumb } from 'react-bulma-components';

storiesOf('Breadcrumb', module).add('Default', () => (
  <div>
    <Box>
      <Breadcrumb
        separator={select('Separator', {
          arrow: 'arrow',
          dot: 'dot',
          bullet: 'bullet',
          succeeds: 'succeeds',
        })}
      >
        <Breadcrumb.Item>
          <a href="test">asdad</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="test">asdad</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="test">asdad</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  </div>
));
