import { storiesOf } from '@storybook/react';
import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

storiesOf('Section', module)
  .add('Default', () => (
    <div>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
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
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
      <Section size="medium">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
      <Section size="medium">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
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
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
      <Section size="large">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
      <Section size="large">
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Heading>
        </Container>
      </Section>
    </div>
  ));
