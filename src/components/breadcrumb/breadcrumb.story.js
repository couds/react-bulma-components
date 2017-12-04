import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import readme from './readme.md';

import Section from '../section';
import Breadcrumb from '.';

/* eslint-disable react/prop-types */
const Anchor = ({
  children,
  ...props
}) => (<a className="Others" {...props} >{children}</a>);
/* eslint-enable react/prop-types */

storiesOf('Breadcrumb', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <div>
      <Section>
        <Breadcrumb
          separator={select('Separator', {
            undefined: 'Default',
            arrow: 'Arrow',
            bullet: 'Bullet',
            dot: 'Dot',
            succeeds: 'Succeeds',
          }, undefined)}
          align={select('Align', {
            undefined: 'Default',
            right: 'Right',
            center: 'Center',
          }, undefined)}
          size={select('Size', {
            undefined: 'Default',
            small: 'Small',
            medium: 'Medium',
            large: 'Large',
          }, undefined)}
          items={object('items', [
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
          ])}
        />
      </Section>
    </div>
  )));
