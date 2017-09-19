import React from 'react';

import { storiesOf } from '@storybook/react';

import Container from '.';

const style = { background: '#e6e6e6', flex: 1, height: 50 };

storiesOf('Container', module)
  .add('Default', () => (
    <Container>
      <div style={style}>
        Content
      </div>
    </Container>
  ))
  .add('Fluid', () => (
    <Container fluid>
      <div style={style}>
        Content
      </div>
    </Container>
  ))
  .add('With widescreen breakpoint', () => (
    <Container breakpoint="widescreen" >
      <div style={style}>
        Content
      </div>
    </Container>
  ));
