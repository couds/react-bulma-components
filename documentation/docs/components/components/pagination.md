---
id: pagination
title: Pagination
sidebar_label: Pagination
---

import { Pagination, Section } from 'react-bulma-components';

---

## **Import**

```js
import { Pagination } from 'react-bulma-components';
```

<br />

## **Examples**

<Section>
  <Pagination current={3} total={5} delta={1} />
</Section>

```jsx
<Section>
  <Pagination current={3} total={5} delta={1} />
</Section>
```

### **Without page number**

<Section>
  <Pagination current={3} total={5} delta={0} />
</Section>

```jsx
<Section>
  <Pagination current={3} total={5} delta={0} />
</Section>
```

### **without prev/next button**

<Section>
  <Pagination showPrevNext={false} current={3} total={5} delta={1} />
</Section>

```jsx
<Section>
  <Pagination showPrevNext={false} current={3} total={5} delta={1} />
</Section>
```

### **with all buttons manually disabled**

<Section>
  <Pagination disabled current={3} total={5} />
</Section>

```jsx
<Section>
  <Pagination disabled current={3} total={5} />
</Section>
```

### **with first and last page**

<Section>
  <Pagination showFirstLast total={5} current={3} />
</Section>

```jsx
<Section>
  <Pagination showFirstLast total={5} current={3} />
</Section>
```

### **with rounded button**

<Section>
  <Pagination rounded total={5} current={3} />
</Section>

```jsx
<Section>
  <Pagination rounded total={5} current={3} />
</Section>
```

### **Configure pager size**

<Section>
  <Pagination size="small" total={5} current={3} />
</Section>

```jsx
<Section>
  <Pagination size="small" total={5} current={3} />
</Section>
```

### **Configure pager position**

<Section>
  <Pagination position="right" total={5} current={3} />
</Section>

```jsx
<Section>
  <Pagination position="right" total={5} current={3} />
</Section>
```

---

## Official documentation

https://bulma.io/documentation/components/pagination
