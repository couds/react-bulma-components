---
id: sizes
title: Sizes
sidebar_label: Sizes
---

import Columns from 'react-bulma-components/lib/components/columns'
import Hero from 'react-bulma-components/lib/components/hero'
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Notification from 'react-bulma-components/lib/components/notification';

## Proportions

You can adjust the size of each column using proportions:

- `"three-quarters"`
- `"two-thirds"`
- `"half"`
- `"one-third"`
- `"one-quarter"`
- `"full"`
- `"four-fifths"`
- `"three-fifths"`
- `"two-fifths"`
- `"one-fifth"`

Just pass them to the `size` prop, and they will size themselves according to the given proportions.
For example, a column with `size` `"two-thirds"` will occupy two third of the available space.

If nothing is passed to `size`, then the column will occupy the remaining space.

<Columns>
  <Columns.Column size="full">
    <Notification color="primary">full</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="four-fifths">
    <Notification color="primary">four-fifths</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="three-fifths">
    <Notification color="primary">three-fifths</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="one-third">
    <Notification color="primary">one-third</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="half">
    <Notification color="primary">half</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns>
  <Columns.Column size="full">
    <Notification color="primary">full</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="four-fifths">
    <Notification color="primary">four-fifths</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="three-fifths">
    <Notification color="primary">three-fifths</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="one-third">
    <Notification color="primary">one-third</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size="half">
    <Notification color="primary">half</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>
```

---

## 12-column system

You can also divide the grid into 12 columns. Just specify how many divisions each column should occupy
with the `size` prop, from 1 to 12.

Again, if `size` prop is not given, the column will use up all the remaining space.

<Columns>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={4}>
    <Notification color="primary">4</Notification>
  </Columns.Column>
  <Columns.Column size={4}>
    <Notification color="primary">4</Notification>
  </Columns.Column>
  <Columns.Column size={4}>
    <Notification color="primary">4</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={2}>
    <Notification color="primary">2</Notification>
  </Columns.Column>
  <Columns.Column size={7}>
    <Notification color="primary">7</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={3}>
    <Notification color="primary">3</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">3</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={4}>
    <Notification color="primary">4</Notification>
  </Columns.Column>
  <Columns.Column size={4}>
    <Notification color="primary">4</Notification>
  </Columns.Column>
  <Columns.Column size={4}>
    <Notification color="primary">4</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={2}>
    <Notification color="primary">2</Notification>
  </Columns.Column>
  <Columns.Column size={7}>
    <Notification color="primary">7</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
  <Columns.Column size={1}>
    <Notification color="primary">1</Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={3}>
    <Notification color="primary">3</Notification>
  </Columns.Column>
  <Columns.Column size={3}>
    <Notification color="primary">3</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="info">auto</Notification>
  </Columns.Column>
</Columns>
```

---

## Offset

You can use the `offset` prop to offset a column by the specified value. It accepts all values that `size` does.
For example, a column can have `size` of `half` while being offset from the left by `one-quarter`.

<Columns>
  <Columns.Column size="half" offset="one-quarter">
    <Notification color="info">
      <p>
        size: half
        <br />
        offset: one-quarter
      </p>
    </Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={4} offset={8}>
    <Notification color="info">
      <p>
        size: 4
        <br />
        offset: 8
      </p>
    </Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={11} offset={1}>
    <Notification color="info">
      <p>
        size: 11
        <br />
        offset: 1
      </p>
    </Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns>
  <Columns.Column size="half" offset="one-quarter">
    <Notification color="info">
      <p>
        size: half
        <br />
        offset: one-quarter
      </p>
    </Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={4} offset={8}>
    <Notification color="info">
      <p>
        size: 4
        <br />
        offset: 8
      </p>
    </Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column size={11} offset={1}>
    <Notification color="info">
      <p>
        size: 11
        <br />
        offset: 1
      </p>
    </Notification>
  </Columns.Column>
</Columns>
```

---

## Narrow Columns

If you want a column to only use as much space as it needs, just make it a narrow column with the `narrow` prop.
Columns alongside narrow columns will size themselves normally according to `size` prop.

:::info
Sizes of the normal columns are calculated based on the dimension of the entire grid,
not the available space after narrow columns.
:::

<br />

<Columns>
  <Columns.Column narrow>
    <Notification color="primary" style={{ width: 200 }}>
      <Heading size={5} renderAs="p">
        Narrow
      </Heading>
      <Heading subtitle renderAs="p">
        200px wide.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column narrow>
    <Notification color="primary" style={{ width: 200 }}>
      <Heading size={5} renderAs="p">
        Narrow
      </Heading>
      <Heading subtitle renderAs="p">
        200px wide.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification>
      <Heading size={5} renderAs="p">
        Flexible column
      </Heading>
      <Heading subtitle renderAs="p">
        This column will take up all remaining space.
      </Heading>
    </Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column narrow>
    <Notification color="primary" style={{ width: 200 }}>
      <Heading size={5} renderAs="p">
        Narrow
      </Heading>
      <Heading subtitle renderAs="p">
        200px wide.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column size="one-third">
    <Notification>
      <Heading size={5} renderAs="p">
        One third
      </Heading>
      <Heading subtitle renderAs="p">
        One third of the space.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column size="one-third">
    <Notification>
      <Heading size={5} renderAs="p">
        One third
      </Heading>
      <Heading subtitle renderAs="p">
        One third of the space.
      </Heading>
    </Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns>
  <Columns.Column narrow>
    <Notification color="primary" style={{ width: 200 }}>
      <Heading size={5} renderAs="p">
        Narrow column
      </Heading>
      <Heading subtitle renderAs="p">
        This column is only 200px wide.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column narrow>
    <Notification color="primary" style={{ width: 200 }}>
      <Heading size={5} renderAs="p">
        Narrow column
      </Heading>
      <Heading subtitle renderAs="p">
        This column is only 200px wide.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification>
      <Heading size={5} renderAs="p">
        Flexible column
      </Heading>
      <Heading subtitle renderAs="p">
        This column will take up all remaining space.
      </Heading>
    </Notification>
  </Columns.Column>
</Columns>

<Columns>
  <Columns.Column narrow>
    <Notification color="primary" style={{ width: 200 }}>
      <Heading size={5} renderAs="p">
        Narrow
      </Heading>
      <Heading subtitle renderAs="p">
        200px wide.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column size="one-third">
    <Notification>
      <Heading size={5} renderAs="p">
        One third
      </Heading>
      <Heading subtitle renderAs="p">
        One third of the space.
      </Heading>
    </Notification>
  </Columns.Column>
  <Columns.Column size="one-third">
    <Notification>
      <Heading size={5} renderAs="p">
        One third
      </Heading>
      <Heading subtitle renderAs="p">
        One third of the space.
      </Heading>
    </Notification>
  </Columns.Column>
</Columns>
```

---

## Official documentation

https://bulma.io/documentation/columns/sizes
