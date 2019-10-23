import React from 'react';

import { storiesOf } from '@storybook/react';

import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

storiesOf('Container', module).add('Default', () => (
  <div>
    <Section>
      <Container>
        <p className="bd-notification is-success">
          <Heading size={5} renderAs="p">
            Default
          </Heading>
          <Heading subtitle renderAs="p">
            Container
          </Heading>
        </p>
      </Container>
    </Section>
    <Section>
      <Container fluid>
        <p className="bd-notification is-info">
          <Heading size={5} renderAs="p">
            Fluid
          </Heading>
          <Heading subtitle renderAs="p">
            Container
          </Heading>
        </p>
      </Container>
    </Section>
    <Section>
      <Container breakpoint="widescreen">
        <p className="bd-notification is-warning">
          <Heading size={5} renderAs="p">
            Breakpoint Widescreen
          </Heading>
          <Heading subtitle renderAs="p">
            Container
          </Heading>
        </p>
      </Container>
    </Section>
    <Section>
      <Container breakpoint="fullhd">
        <p className="bd-notification is-danger">
          <Heading size={5} renderAs="p">
            Breakpoint Fullhd
          </Heading>
          <Heading subtitle renderAs="p">
            Container
          </Heading>
        </p>
      </Container>
    </Section>
  </div>
));
