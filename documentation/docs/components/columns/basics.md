---
id: basics
title: Basics
sidebar_label: Basics
---
import Columns from 'react-bulma-components/lib/components/columns'
import Hero from 'react-bulma-components/lib/components/hero'

---
## **Import**
```js
import Columns from 'react-bulma-components/lib/components/columns'
```

---
---
You can build columns very easily:

1. Add a `<Columns />` component
2. Put as many `<Column />` as you want inside it.

<br />

All `<Column />`s will be equally sized.

<Columns>
    <Columns.Column>
        <Hero color="primary">First column</Hero>
    </Columns.Column>
    <Columns.Column>
        <Hero color="primary">Second column</Hero>
    </Columns.Column>
    <Columns.Column>
        <Hero color="primary">Third column</Hero>
    </Columns.Column>
    <Columns.Column>
        <Hero color="primary">Fourth column</Hero>
    </Columns.Column>
</Columns>

```jsx
<Columns>
  <Columns.Column>
    <Hero color="primary">First column</Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="primary">Second column</Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="primary">Third column</Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="primary">Fourth column</Hero>
  </Columns.Column>
</Columns>
```
---

## Official documentation

https://bulma.io/documentation/columns/basics
