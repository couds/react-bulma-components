import React from 'react';

import { storiesOf } from '@storybook/react';

import Element from 'react-bulma-components/lib/components/element';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Element', module).add('Default', () => (
  <Element
    paddingless={boolean('paddingless', false)}
    responsive={{
      mobile: {
        display: {
          value: 'block',
        },
        hide: {
          value: true,
        },
      },
      tablet: {
        display: {
          value: 'flex',
        },
      },
      desktop: {
        display: {
          value: 'inline-flex',
          only: true,
        },
      },
      widescreen: {
        display: {
          value: 'inline-block',
        },
      },
    }}
  >
    Custom Element to use Bulma helper
  </Element>
));
