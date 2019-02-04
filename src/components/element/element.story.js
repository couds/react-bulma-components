import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Element from 'react-bulma-components/lib/components/element';

storiesOf('Element', module).add('Default', () => (
  <Element
    paddingless={boolean('paddingless', false)}
    responsive={{
      mobile: {
        display: 'block'
      },
      tablet: {
        display: 'flex'
      },
      desktop: {
        display: 'inline-flex',
        only: true
      },
      widescreen: {
        display: 'inline-block'
      }
    }}
    hide={{
      tablet: {
        hide: true,
        only: true
      },
      widescreen: {
        hide: true
      }
    }}
  >
    Custom Element to use Bulma helper
  </Element>
));
