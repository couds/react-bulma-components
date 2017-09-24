import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Hero from '.';
import Heading from '../heading';
import Section from '../section';
import Container from '../container';

storiesOf('Hero', module)
  .add('Default with color', withInfo()(() => (
    <div>
      <Section>
        <Hero color="primary" >
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

      <Section>
        <Hero color="danger" >
          <Hero.Body>
            <Container>
              <Heading>
                Hero title Danger
              </Heading>
              <Heading subtitle size={3}>
              Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Section>
        <Hero color="info" >
          <Hero.Body>
            <Container>
              <Heading>
                Hero title Info
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
  .add('Gradient (EXPERIMENTAL)', withInfo()(() => (
    <div>
      <Section>
        <Hero color="primary" gradient >
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

      <Section>
        <Hero color="danger" gradient >
          <Hero.Body>
            <Container>
              <Heading>
                Hero title Danger
              </Heading>
              <Heading subtitle size={3}>
              Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Section>
        <Hero color="info" gradient >
          <Hero.Body>
            <Container>
              <Heading>
                Hero title Info
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
  .add('Differents Sizes', withInfo()(() => (
    <div>
      <Hero color="primary" size="medium" >
        <Hero.Body>
          Medium
        </Hero.Body>
      </Hero>
      <Hero color="info" size="large" >
        <Hero.Body>
          Large
        </Hero.Body>
      </Hero>
      <Hero color="danger" size="fullheight" >
        <Hero.Body>
          FULL HEIGHT
        </Hero.Body>
      </Hero>
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
