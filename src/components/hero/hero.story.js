import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

import Hero from '.';
import Heading from '../heading';
import Section from '../section';
import Container from '../container';

storiesOf('Hero', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <div>
      <Section>
        <Hero
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
          gradient={boolean('Gardient', false)}
          size={select('Size', {
            medium: 'Medium',
            large: 'Large',
            fullheight: 'Fullheight',
          })}
        >
          <Hero.Body>
            <Container>
              <Heading>
                Hero title Primary
              </Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    </div>
  )))
  .add('Vertical Alignments', withInfo()(() => (
    <Hero size="fullheight" color="primary" >
      <Hero.Head renderAs="header">
        <div className="bd-notification is-info">Header</div>
      </Hero.Head>
      <Hero.Body>
        Body
      </Hero.Body>
      <Hero.Footer>
        <div className="bd-notification is-danger">Footer</div>
      </Hero.Footer>
    </Hero>
  )));
