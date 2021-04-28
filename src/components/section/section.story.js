import React from 'react';

import { Section, Container, Heading } from '../..';

export const Default = (args) => {
  return (
    <>
      <Section {...args}>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section {...args}>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
      <Section {...args}>
        <Container>
          <Heading>Section</Heading>
          <Heading subtitle>
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
    </>
  );
};

Default.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['medium', 'large'],
    },
  },
};
