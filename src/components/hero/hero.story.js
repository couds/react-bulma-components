import React from 'react';

import { storiesOf } from '@storybook/react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

storiesOf('Hero', module)
  .add('Default with color', () => (
    <div>
      <Section>
        <Hero color="primary">
          <Hero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>

      <Section>
        <Hero color="danger">
          <Hero.Body>
            <Container>
              <Heading>Hero title Danger</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Section>
        <Hero color="info">
          <Hero.Body>
            <Container>
              <Heading>Hero title Info</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    </div>
  ))
  .add('Gradient (EXPERIMENTAL)', () => (
    <div>
      <Section>
        <Hero color="primary" gradient>
          <Hero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>

      <Section>
        <Hero color="danger" gradient>
          <Hero.Body>
            <Container>
              <Heading>Hero title Danger</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Section>
        <Hero color="info" gradient>
          <Hero.Body>
            <Container>
              <Heading>Hero title Info</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    </div>
  ))
  .add('Differents Sizes', () => (
    <div>
      <Hero color="primary" size="medium">
        <Hero.Body>Medium</Hero.Body>
      </Hero>
      <Hero color="info" size="large">
        <Hero.Body>Large</Hero.Body>
      </Hero>
      <Hero color="danger" size="fullheight">
        <Hero.Body>FULL HEIGHT</Hero.Body>
      </Hero>
    </div>
  ))
  .add('Vertical Alignments', () => (
    <Hero size="fullheight" color="primary">
      <Hero.Head renderAs="header">
        <div className="bd-notification is-info">Header</div>
      </Hero.Head>
      <Hero.Body>Body</Hero.Body>
      <Hero.Footer>
        <div className="bd-notification is-danger">Footer</div>
      </Hero.Footer>
    </Hero>
  ));
