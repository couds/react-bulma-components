import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

import Container from '.';
import Heading from '../heading';
import Section from '../section';

storiesOf('Container', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <div>
      <Section>
        <Container
          fluid={boolean('Fluid', false)}
          breakpoint={select('Breakpoint', {
            '': 'Default',
            mobile: 'Mobile',
            tablet: 'Tablet',
            desktop: 'Desktop',
            widescreen: 'WideScreen',
            fullhd: 'FullHD',
          }, '')}
        >
          <p className="bd-notification is-success">
            <Heading size={5} renderAs="p">Container</Heading>
            <Heading subtitle renderAs="p">Change the props using the panel below</Heading>
          </p>
        </Container>
      </Section>
    </div>
  )));
