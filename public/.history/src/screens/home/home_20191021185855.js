import React from 'react';
import Container from 'react-bulma-components/lib/components/container';

import Banner from './sections/banner';
import Features from './sections/features';
import Example from './sections/example';

import './home.scss';



const Index = () => (
  <div className="home">
    <Banner />
    <Container>
      <Features />
      <Example />
    </Container>
  </div>
);

export default Index;
