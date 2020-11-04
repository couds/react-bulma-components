---
id: progress-bar
title: Progress Bar
sidebar_label: Progress Bar
---

import { Progress, Section } from 'react-bulma-components';

## **Import**

```js
import { Progress } from 'react-bulma-components';
```

<br />

## **Example**

<Section>
  <Progress />
  <Progress max={100} value={15} color="primary" size="small" />
  <Progress max={100} value={15} color="info" />
  <Progress max={100} value={15} color="success" size="medium" />
  <Progress max={100} value={15} color="error" size="large" />
</Section>

```jsx
<Section>
  <Progress />
  <Progress max={100} value={15} color="primary" size="small" />
  <Progress max={100} value={15} color="info" />
  <Progress max={100} value={15} color="success" size="medium" />
  <Progress max={100} value={15} color="error" size="large" />
</Section>
```

## Official documentation

https://bulma.io/documentation/elements/progress
