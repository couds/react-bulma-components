---
id: container
title: Container
sidebar_label: Container
---

import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Notification from 'react-bulma-components/lib/components/notification';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';

## Overview

The container component is a basic layout element that centers your contents horizontally.

### Import

```js
import Container from 'react-bulma-components/lib/components/container';
```

### Props

| Prop name    | Type       | Default values |
| ------------ | ---------- | -------------- |
| `fluid`      | Boolean    | `false`        |
| `breakpoint` | Breakpoint | `undefined`    |

---

## Basic

<Section>
  <Container>
    <Notification color="primary">
      This container is <strong>centered</strong> on desktop
    </Notification>
  </Container>
</Section>

```jsx
<Container>
  <Notification>
    This container is <strong>centered</strong> on desktop
  </Notification>
</Container>
```

## Fluid container

The container will span the entire width of available space and leave 32px margin on the left and right sides.

<Section>
  <Container fluid>
    <Notification color="primary">
      This container is <strong>fluid</strong>
    </Notification>
  </Container>
</Section>

```jsx
<Container fluid>
  <Notification>
    This container is <strong>centered</strong> on desktop
  </Notification>
</Container>
```

---

## Breakpoints

You can have a **fullwidth** container until the specified breakpoint.

<Section>
  <Container breakpoint="widescreen">
    <Notification color="primary">
      This container is <strong>fullwidth</strong> until <strong>widescreen</strong>
    </Notification>
  </Container>
</Section>

```jsx
<Container breakpoint="widescreen">
  <Notification color="primary">
    This container is <strong>fullwidth</strong> until{' '}
    <strong>widescreen</strong>
  </Notification>
</Container>
```

---

## Official documentation

https://bulma.io/documentation/layout/container
