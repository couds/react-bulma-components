---
id: gap
title: Gap
sidebar_label: Gap
---

import Columns from 'react-bulma-components/lib/components/columns'
import Hero from 'react-bulma-components/lib/components/hero'
import Notification from 'react-bulma-components/lib/components/notification'
import Section from 'react-bulma-components/lib/components/section';

You can customize the gaps between columns

## Default gap

By default, columns have gaps equal to the value of `$column-gap`, which is `0.75rem` by default.

Note that it applies to **individual** column, so the gap between two adjacent columns will be twice of `$column-gap`.

<Columns>
  <Columns.Column>
    <Notification color="primary">Default gap</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Default gap</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Default gap</Notification>
  </Columns.Column>
</Columns>

## Gapless

Don't want any gaps between columns? Simply use the `gapless` prop and set it to true.

<Columns gapless>
  <Columns.Column>
    <Notification color="primary">No gap</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">No gap</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">No gap</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns jsx>
  <Columns.Column>
    <Notification color="primary">No gap</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">No gap</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">No gap</Notification>
  </Columns.Column>
</Columns>
```

## Breakpoint-based gaps

You can specify different gap values for different viewport sizes, from 0 to 9. 0 means there shouldn't be any gaps,
and 3 is the default gap value.

:::tip
Try resizing the window or use your browser's developer tools to resize the viewport and see what happens!
:::

<br />

<Columns
  variableGap={{
    mobile: 1,
    tablet: 0,
    desktop: 3,
    widescreen: 8,
    fullhd: 2,
  }}
>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns
  variableGap={{
    mobile: 1,
    tablet: 0,
    desktop: 3,
    widescreen: 8,
    fullhd: 2,
  }}
>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">Size 1</Notification>
  </Columns.Column>
</Columns>
```

## Official documentation

https://bulma.io/documentation/columns/gap
