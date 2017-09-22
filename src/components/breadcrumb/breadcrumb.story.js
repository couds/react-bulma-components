import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Section from '../section';
import Box from '../box';
import Breadcrumb from '.';

storiesOf('Breadcrumb', module)
  .add('Default', withInfo('Breadcrumb Implementation')(() => (
    <div>
      <Section>
        <Breadcrumb
          items={[
            {
              name: 'Storybook',
              url: '#',
            }, {
              name: 'Breadcrumb',
              url: '#',
            }, {
              name: 'Breadcrumb Types',
              url: '#',
              active: true,
            },
          ]}
        />
      </Section>
    </div>
  )))
  .add('Separators', withInfo('Breadcrumb Separator Implementation')(() => (
    <Section>
      {[null, 'arrow', 'dot', 'bullet', 'succeeds'].map(separator => (
        <Box>
          <Breadcrumb
            separator={separator}
            items={[
              {
                name: 'Storybook',
                url: '#',
              }, {
                name: 'Breadcrumb',
                url: '#',
              }, {
                name: 'Breadcrumb Types',
                url: '#',
                active: true,
              },
            ]}
          />
        </Box>
      ))}
    </Section>
  )));
