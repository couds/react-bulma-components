---
id: basics
title: Basics
sidebar_label: Basics
---

import { Columns, Notification } from 'react-bulma-components'

## **Import**

```js
import { Columns } from 'react-bulma-components';
```

<br />

You can build columns very easily:

1. Add a `<Columns />` component
2. Put as many `<Column />` as you want inside it.

<br />

All `<Column />`s will be equally sized.

<Columns>
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Fourth column</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns>
  <Columns.Column>
    <Notification color="primary">First column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Second column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Third column</Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">Fourth column</Notification>
  </Columns.Column>
</Columns>
```

---

## Official documentation

https://bulma.io/documentation/columns/basics
