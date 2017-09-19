import React from 'react';

import { storiesOf } from '@storybook/react';

import Hero from '.';

const style = { textTransform: 'uppercase', textAlign: 'center' };

storiesOf('Hero', module)
  .add('Default with role', () => (
    <div>
      <Hero heroRole="primary" >
        <h1 style={style}>
          Content
        </h1>
      </Hero>
      <Hero heroRole="danger" >
        <h1 style={style}>
          danger
        </h1>
      </Hero>
      <Hero heroRole="info" >
        <h1 style={style}>
          info
        </h1>
      </Hero>
    </div>
  ))
  .add('Gradient (EXPERIMENTAL)', () => (
    <div>
      <Hero heroRole="primary" gradient >
        <h1 style={style}>
          Content
        </h1>
      </Hero>
      <Hero heroRole="danger" gradient >
        <h1 style={style}>
          danger
        </h1>
      </Hero>
      <Hero heroRole="info" gradient >
        <h1 style={style}>
          info
        </h1>
      </Hero>
    </div>
  ))
  .add('Differents Sizes', () => (
    <div>
      <Hero heroRole="primary" size="medium" >
        <Hero.Body>
          Medium
        </Hero.Body>
      </Hero>
      <Hero heroRole="info" size="large" >
        <Hero.Body>
          Large
        </Hero.Body>
      </Hero>
      <Hero heroRole="danger" size="fullheight" >
        <Hero.Body>
          FULL HEIGHT
        </Hero.Body>
      </Hero>
    </div>
  ))
  .add('Vertical Alignments', () => (
    <Hero size="fullheight" heroRole="primary" >
      <Hero.Head renderAs="header">
        <div className="bd-notification is-info">Header</div>
      </Hero.Head>
      <Hero.Body>
        Body
      </Hero.Body>
      <Hero.Footer>
        <div className="bd-notification is-danger">Footer</div>
      </Hero.Footer>
    </Hero>
  ));
