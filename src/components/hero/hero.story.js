import React from 'react';

import { Hero, Heading, Container } from '../..';
import CONSTANTS from '../../constants';

export const Default = (args) => {
  return (
    <div style={{ margin: '-1rem' }}>
      <Hero {...args}>
        <Hero.Header renderAs="header">Header</Hero.Header>
        <Hero.Body>
          <Container>
            <Heading>Hero title Info</Heading>
            <Heading subtitle size={3}>
              Subtitle
            </Heading>
          </Container>
        </Hero.Body>
        <Hero.Footer>Footer</Hero.Footer>
      </Hero>
    </div>
  );
};

Default.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['default'].concat(Object.values(CONSTANTS.COLORS)),
    },
  },
  size: {
    control: {
      type: 'select',
      options: [
        'default',
        'small',
        'medium',
        'large',
        'halfheight',
        'fullheight',
      ],
    },
  },
};
