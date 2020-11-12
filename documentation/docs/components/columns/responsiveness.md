---
id: responsiveness
title: Responsiveness
sidebar_label: Responsiveness
---

import { Columns, Notification, Section } from 'react-bulma-components';

You can specify at what viewport size should `Columns` be "activated",
meaning it will display `Columns.Column` in a row. Any viewport smaller
than the specified viewport size will cause `Columns` to display children
in a column.

By default, the value is `'tablet'`.

:::tip
Try resizing the window or use your browser's developer tools to resize the viewport
and see what happens!
:::

## Different viewport sizes

### `mobile`

<Columns breakpoint="mobile">
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="warning">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="danger">Fourth column</Notification>
  </Columns.Column>
</Columns>


```jsx
<Columns breakpoint="mobile">
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="warning">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="danger">Fourth column</Notification>
  </Columns.Column>
</Columns>
```

### `tablet`

<Columns breakpoint="tablet">
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="warning">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="danger">Fourth column</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns breakpoint="tablet">
  <Columns.Column>
    <Hero color="success">First column</Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="info">Second column</Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="warning">Third column</Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="warning">Fourth column</Hero>
  </Columns.Column>
</Columns>
```

### `desktop`

<Columns breakpoint="desktop">
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="warning">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="danger">Fourth column</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns breakpoint="desktop">
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="warning">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="danger">Fourth column</Notification>
  </Columns.Column>
</Columns>
```

### Other viewport sizes

- `'widescreen'`
- `'fullhd'`

---

## Customize sizes for different viewports

You can customize how big a `Columns.Column` should be for different viewport sizes

```jsx
<Columns breakpoint="desktop">
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="warning">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="danger">Fourth column</Notification>
  </Columns.Column>
</Columns>
```

<Section>
  <Columns breakpoint="mobile">
    <Columns.Column
      mobile={{
        size: 'three-quarters',
      }}
      tablet={{
        size: 'two-thirds',
      }}
      desktop={{
        size: 'one-third',
      }}
      widescreen={{
        size: 'half',
      }}
      fullhd={{
        size: 'two-thirds',
      }}
    >
      <Notification color="primary">
        <p>
          is-three-quarters-mobile
          <br />
          is-two-thirds-tablet
          <br />
          is-one-third-desktop
          <br />
          is-half-widescreen
          <br />
          is-two-third-fullhd
        </p>
      </Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification>1</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification>1</Notification>
    </Columns.Column>
  </Columns>
</Section>

```jsx
<Section>
  <Columns breakpoint="mobile">
    <Columns.Column
      mobile={{
        size: 'three-quarters',
      }}
      tablet={{
        size: 'two-thirds',
      }}
      desktop={{
        size: 'half',
      }}
      widescreen={{
        size: 'one-third',
      }}
      fullhd={{
        size: 'two-third',
      }}
    >
      <Notification color="primary">
        <p>
          is-three-quarters-mobile
          <br />
          is-two-thirds-tablet
          <br />
          is-half-desktop is-one-third-widescreen is-one-quarter-fullhd
        </p>
      </Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification>1</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification>1</Notification>
    </Columns.Column>
  </Columns>
</Section>
```

---

## Official documentation

https://bulma.io/documentation/columns/responsiveness
