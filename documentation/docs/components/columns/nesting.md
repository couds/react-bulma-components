---
id: nesting
title: Nesting
sidebar_label: Nesting
---

import { Columns, Notification, Section } from 'react-bulma-components';

You can nest `Columns` inside any `Columns.Column` and there's no limit to
the level of nesting.

In this example, the numbers represent the nesting level the `Columns.Column` is in.

<Section>
  <Columns>
    <Columns.Column>
      <Notification color="primary">0</Notification>
      <Columns>
        <Columns.Column>
          <Notification color="info">1</Notification>
          <Columns>
            <Columns.Column size="half">
              <Notification color="danger">2</Notification>
            </Columns.Column>
            <Columns.Column size="half">
              <Notification color="danger">2</Notification>
            </Columns.Column>
          </Columns>
        </Columns.Column>
        <Columns.Column>
          <Notification color="info">1</Notification>
        </Columns.Column>
      </Columns>
    </Columns.Column>
    <Columns.Column>
      <Notification color="primary">0</Notification>
      <Columns>
        <Columns.Column size="two-thirds">
          <Notification color="info">1</Notification>
        </Columns.Column>
        <Columns.Column size="one-third">
          <Notification color="info">1</Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="info">1</Notification>
        </Columns.Column>
      </Columns>
    </Columns.Column>
  </Columns>
</Section>

```jsx
<Section>
  <Columns>
    <Columns.Column>
      <Notification color="success">First column</Notification>
      <Columns>
        <Columns.Column>
          <Notification color="info">First Nested Column</Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="warning">Second Nested Column</Notification>
        </Columns.Column>
      </Columns>
    </Columns.Column>
    <Columns.Column>
      <Notification color="success">Second column</Notification>
      <Columns>
        <Columns.Column size="half">
          <Notification color="info">First Nested Column</Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="warning">Second Nested Column</Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="warning">Thirld Nested Column</Notification>
        </Columns.Column>
      </Columns>
    </Columns.Column>
  </Columns>
</Section>
```

---

## Official documentation

https://bulma.io/documentation/columns/nesting
