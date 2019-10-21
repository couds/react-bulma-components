import React from 'react';
import { Container, Columns } from 'react-bulma-components';

import Item from './components/item';
import { Heading } from 'react-bulma-components/lib';

const Documentation = () => (
  <Container style={{ paddingTop: '1.5rem' }}>
    <Columns>
      <Columns.Column size="one-third">
      </Columns.Column>
      <Columns.Column size="auto">
        <Heading>
          Documentation
        </Heading>
        <Heading subtitle size={4} renderAs="p">
          All you need to build your site
        </Heading>
      </Columns.Column>
    </Columns>
  </Container>
);

export default Documentation;
