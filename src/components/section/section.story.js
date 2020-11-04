import React from 'react';
import { storiesOf } from '@storybook/react';

import { Section, Container, Heading } from 'react-bulma-components';

storiesOf('Section', module)
  .add('Default', () => (
    <div>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
    </div>
  ))
  .add('Medium', () => (
    <div>
      <Section size="medium">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section size="medium">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section size="medium">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
    </div>
  ))
  .add('Large', () => (
    <div>
      <Section size="large">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section size="large">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section size="large">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
    </div>
  ));
