---
id: nesting
title: Nesting
sidebar_label: Nesting
---

import Columns from 'react-bulma-components/lib/components/columns'
import Hero from 'react-bulma-components/lib/components/hero'
import Section from 'react-bulma-components/lib/components/section';

---
## **Import**
```js
import Columns from 'react-bulma-components/lib/components/columns'
```

---
---

## **Example**

<Section>
<Columns>
  <Columns.Column size="half">
    <Hero color="success">First column</Hero>
      <Columns>
        <Columns.Column size="one-third">
          <Hero color="info">First Nested Column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Second Nested Column</Hero>
        </Columns.Column>
      </Columns>
  </Columns.Column>
  <Columns.Column size="half">
    <Hero color="success">Second column</Hero>
      <Columns>
          <Columns.Column size="half">
          <Hero color="info">First Nested Column</Hero>
          </Columns.Column>
          <Columns.Column size="one-quarter">
          <Hero color="warning">Second Nested Column</Hero>
          </Columns.Column>
          <Columns.Column>
          <Hero color="warning">Thirld Nested Column</Hero>
          </Columns.Column>
      </Columns>
  </Columns.Column>
</Columns>
</Section>


```jsx
<Columns>
  <Columns.Column size="half">
    <Hero color="success">First column</Hero>
      <Columns>
        <Columns.Column size="one-third">
          <Hero color="info">First Nested Column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Second Nested Column</Hero>
        </Columns.Column>
      </Columns>
  </Columns.Column>
  <Columns.Column size="half">
    <Hero color="success">Second column</Hero>
      <Columns>
          <Columns.Column size="half">
          <Hero color="info">First Nested Column</Hero>
          </Columns.Column>
          <Columns.Column size="one-quarter">
          <Hero color="warning">Second Nested Column</Hero>
          </Columns.Column>
          <Columns.Column>
          <Hero color="warning">Thirld Nested Column</Hero>
          </Columns.Column>
      </Columns>
  </Columns.Column>
</Columns>
```

---

## Official documentation

https://bulma.io/documentation/columns/nesting