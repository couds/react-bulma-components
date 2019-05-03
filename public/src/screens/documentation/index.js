import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns } from 'react-bulma-components';

import Item from './components/item';
import { Heading } from 'react-bulma-components/lib';

const Documentation = () => (
  <Container style={{ paddingTop: '1.5rem' }}>
    <Heading>
      Documentation
    </Heading>
    <Heading subtitle size={4} renderAs="p">
      All you need to build your site
    </Heading>
    <Columns>
      <Columns.Column >
        <Item icon="rocket" link="/" title="Rocket" description="Description of item" />
      </Columns.Column>
    </Columns>
  </Container>
);

export default Documentation;
