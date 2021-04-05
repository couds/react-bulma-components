import React from 'react';

import { Hero, Heading, Container, Notification } from '../..';
import CONSTANTS from '../../constants';

export const Default = (args) => (
  <div style={{ margin: '-1rem' }}>
    <Hero {...args}>
      <Hero.Header renderAs="header">
        <Notification color="dark">Header</Notification>
      </Hero.Header>
      <Hero.Body>
        <Container>
          <Heading>Hero title Info</Heading>
          <Heading subtitle size={3}>
            Subtitle
          </Heading>
        </Container>
      </Hero.Body>
      <Hero.Footer>
        <Notification color="dark">Footer</Notification>
      </Hero.Footer>
    </Hero>
  </div>
);

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
      options: ['default', 'small', 'medium', 'large', 'fullheight'],
    },
  },
};
