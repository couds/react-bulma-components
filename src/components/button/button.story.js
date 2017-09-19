import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
.add('Types', () => (
  <div>
    <Button>
      Normal
    </Button>
    <Button type="primary">
      Primary
    </Button>
    <Button type="info">
      Info
    </Button>
    <Button type="danger">
      Danger
    </Button>
    <Button type="warning">
      Warning
    </Button>
    <Button type="success">
      Success
    </Button>
  </div>
))
.add('Colors', () => (
  <div>
    <Button>
      Normal
    </Button>
    <Button color="white">
      White
    </Button>
    <Button color="link">
      Link
    </Button>
    <Button color="light">
      Light
    </Button>
    <Button color="dark">
      Dark
    </Button>
    <Button color="black">
      Black
    </Button>
  </div>
))
.add('Full Width', () => (
  <div>
    <Button fill type="primary">
      Full Width
    </Button>
  </div>
))
.add('Other Styles', () => (
  <div>
    <Button loading type="info">
      Loading
    </Button>
    <Button outlined type="danger">
      Warning Outlined
    </Button>
    <Button inverted type="success">
      Success Inverted
    </Button>
    <Button disabled type="info">
      Disabled
    </Button>
    <div style={{ background: '#4c4c4c', padding: 20, width: 200, margin: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button inverted outlined type="success">
        Inverted Outlined
      </Button>
    </div>
  </div>
));
