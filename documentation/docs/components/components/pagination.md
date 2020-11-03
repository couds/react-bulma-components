---
id: pagination
title: Pagination
sidebar_label: Pagination
---

import Pagination from 'react-bulma-components/lib/components/pagination';
import Section from 'react-bulma-components/lib/components/section';

---

## **Import**

```js
import Pagination from 'react-bulma-components/lib/components/pagination';
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
  <Pagination showFirstLast={true} />
</Section>

```jsx
<Section>
  <Pagination showFirstLast={true} />
</Section>
```

### **with rounded button**

<Section>
  <Pagination rounded={true} />
</Section>

```jsx
<Section>
  <Pagination rounded={true} />
</Section>
```

### **Configure pager size**

<Section>
  <Pagination size="small" />
</Section>

```jsx
<Section>
  <Pagination size="small" />
</Section>
```

### **Configure pager position**

<Section>
  <Pagination position="right" />
</Section>

```jsx
<Section>
  <Pagination position="right" />
</Section>
```

---

## Official documentation

https://bulma.io/documentation/components/pagination
