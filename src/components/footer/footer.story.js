import React from 'react';

import { storiesOf } from '@storybook/react';

import Footer from '.';
import Container from '../container';

storiesOf('Footer', module)
  .add('Default', () => (
    <Footer>
      <Container>
        Footer Component
      </Container>
    </Footer>
  ));
