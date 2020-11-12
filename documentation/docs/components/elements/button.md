---
id: button
title: Button
sidebar_label: Button
---

import { Button, Box, Section } from 'react-bulma-components';

The Button element is used to take user actions.

---

## **Import**

```js
import Button from 'react-bulma-components';
```

<br />

## **Examples**

<Section>
  <Button>Button</Button>
</Section>

```jsx
<Section>
  <Button>Button</Button>
</Section>
```

### **As another react element**

<Section>
  <Button color="info">
    Button rendered using another React Component with props
  </Button>
</Section>

```jsx
<Section>
  <Button color="info">
    Button rendered using another React Component with props
  </Button>
</Section>
```

### **Button group**

<Section>
  <Button.Group>
     <Button renderAs="span" color="success">
      Save changes
     </Button>
     <Button renderAs="span" color="info">
      Save and continue
     </Button>
     <Button renderAs="span" color="danger">
      Cancel
     </Button>
  </Button.Group>
</Section>

```jsx
<Section>
  <Button.Group>
    <Button renderAs="span" color="success">
      Save changes
    </Button>
    <Button renderAs="span" color="info">
      Save and continue
    </Button>
    <Button renderAs="span" color="danger">
      Cancel
    </Button>
  </Button.Group>
</Section>
```

---

## Official documentation

https://bulma.io/documentation/elements/button
