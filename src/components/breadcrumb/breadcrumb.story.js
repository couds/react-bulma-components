import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from 'react-bulma-components/lib/components/box';
import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';
import { select } from '@storybook/addon-knobs';

storiesOf('Breadcrumb', module)
  .add('Default', () => (
    <div>
      <Box>
        <Breadcrumb
          separator={select('Separator', {
            arrow: 'arrow',
            dot: 'dot',
            bullet: 'bullet',
            succeeds: 'succeeds',
          })}
          items={[
            {
              name: 'Storybook',
              url: '#1',
            },
            {
              name: 'Breadcrumb',
              url: '#2',
            },
            {
              name: 'Breadcrumb Types',
              url: '#3',
              active: true,
            },
          ]}
        />
      </Box>
    </div>
  ))
  .add('Use Custom render Element', () => {
    /* eslint-disable react/prop-types */
    const Anchor = ({ children, ...props }) => (
      <a className="Others" {...props}>
        {children}
      </a>
    );
    /* eslint-enable react/prop-types */

    return (
      <div>
        <Box>
          <Breadcrumb
            renderAs={Anchor}
            hrefAttr="href"
            separator={select('Separator', {
              default: undefined,
              arrow: 'arrow',
              dot: 'dot',
              bullet: 'bullet',
              succeeds: 'succeeds',
            })}
            items={[
              {
                name: 'Storybook',
                url: '#1',
              },
              {
                name: 'Breadcrumb',
                url: '#2',
              },
              {
                name: 'Breadcrumb Types',
                url: '#3',
                active: true,
              },
            ]}
          />
        </Box>
      </div>
    );
  });
