---
id: options
title: Options
sidebar_label: Options
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
<Columns vCentered>
  <Columns.Column size={8}>
    <Hero color="primary">
      <p>First column</p>
    </Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="primary">
      <p>
      Second column with more content. This is so you can see the vertical
      alignment.
      </p>
    </Hero>
  </Columns.Column>
</Columns>
</Section>

```jsx
<Columns vCentered>
  <Columns.Column size={8}>
    <Hero color="primary">
      <p>First column</p>
    </Hero>
  </Columns.Column>
  <Columns.Column>
    <Hero color="primary">
      <p>
      Second column with more content. This is so you can see the vertical
      alignment.
      </p>
    </Hero>
  </Columns.Column>
</Columns>
```
---


## Official documentation

https://bulma.io/documentation/columns/options