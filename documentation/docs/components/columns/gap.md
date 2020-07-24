---
id: gap
title: Gap
sidebar_label: Gap
---

import Columns from 'react-bulma-components/lib/components/columns'
import Hero from 'react-bulma-components/lib/components/hero'
import Section from 'react-bulma-components/lib/components/section';

---

## **Import**

```js
import Columns from 'react-bulma-components/lib/components/columns';
```

<br />

## **Examples**

<Section>
  <Columns
    variableGap={{
      mobile: 1,
      tablet: 0,
      desktop: 3,
      widescreen: 8,
      fullhd: 2,
    }}>
    <Columns.Column size={3}>
      <Hero color="dark">Size 1</Hero>
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="light">Size 1</Hero>
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="white">Size 1</Hero>
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="danger">Size 1</Hero>
    </Columns.Column>
  </Columns>
</Section>

```jsx
<Section>
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
      <Hero color="dark">Size 1</Hero>
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="light">Size 1</Hero>
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="white">Size 1</Hero>
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="danger">Size 1</Hero>
    </Columns.Column>
  </Columns>
</Section>
```

### **Gapless**

<Section>
  <Columns gapless>
    <Columns.Column>
      <Hero color="success">First Column</Hero>
    </Columns.Column>
    <Columns.Column>
      <Hero color="info">Middle Column</Hero>
    </Columns.Column>
    <Columns.Column>
      <Hero color="warning">Last Column</Hero>
    </Columns.Column>
  </Columns>
</Section>

```jsx
<Section>
  <Columns gapless>
    <Columns.Column>
      <Hero color="success">First Column</Hero>
    </Columns.Column>
    <Columns.Column>
      <Hero color="info">Middle Column</Hero>
    </Columns.Column>
    <Columns.Column>
      <Hero color="warning">Last Column</Hero>
    </Columns.Column>
  </Columns>
</Section>
```

---

## Official documentation

https://bulma.io/documentation/columns/gap
