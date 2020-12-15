import React from 'react';

import { Container, Notification } from '../..';

export const Basic = () => (
  <Container>
    <Notification color="primary">
      This container is <strong>centered</strong> on desktop
    </Notification>
  </Container>
);

export const Fluid = () => (
  <Container fluid>
    <Notification color="primary">
      This container is <strong>fluid</strong>
    </Notification>
  </Container>
);

export const Breakpoint = () => (
  <div>
    <Container breakpoint="widescreen">
      <Notification color="primary">
        This container is <strong>fullwidth</strong> until{' '}
        <strong>widescreen</strong>
      </Notification>
    </Container>
    <br />
    <Container breakpoint="mobile">
      <Notification color="primary">
        This container is <strong>fullwidth</strong> until{' '}
        <strong>mobile</strong>
      </Notification>
    </Container>
  </div>
);
