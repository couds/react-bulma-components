import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Section from '../section';
import Box from '../box';
import Breadcrumb from '.';

/* eslint-disable react/prop-types */
const Anchor = ({
  children,
  ...props
}) => (<a className="Others" {...props} >{children}</a>);
/* eslint-enable react/prop-types */

storiesOf('Breadcrumb', module)
  .add('Default', withInfo('Breadcrumb Implementation')(() => (
    <div>
      <Section>
        <Breadcrumb
          items={[
            {
              name: 'Storybook',
              url: '#1',
            }, {
              name: 'Breadcrumb',
              url: '#2',
            }, {
              name: 'Breadcrumb Types',
              url: '#3',
              active: true,
            },
          ]}
        />
      </Section>
    </div>
  )))
  .add('Use Custom render Element', withInfo('Breadcrumb Implementation')(() => (
    <div>
      <Section>
        <Breadcrumb
          renderAs={Anchor}
          hrefAttr="href"
          items={[
            {
              name: 'Storybook',
              url: '#1',
            }, {
              name: 'Breadcrumb',
              url: '#2',
            }, {
              name: 'Breadcrumb Types',
              url: '#3',
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
        <Box key={separator}>
          <Breadcrumb
            separator={separator}
            items={[
              {
                name: 'Storybook',
                url: '#1',
              }, {
                name: 'Breadcrumb',
                url: '#2',
              }, {
                name: 'Breadcrumb Types',
                url: '#3',
                active: true,
              },
            ]}
          />
        </Box>
      ))}
    </Section>
  )));
