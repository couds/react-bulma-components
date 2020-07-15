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
---


---

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

### ** with all buttons manually disabled**

<Section>
  <Pagination disabled current={3} total={5} />
</Section>

```jsx
<Section>
  <Pagination disabled current={3} total={5} />
</Section>
```
---

## Official documentation

https://bulma.io/documentation/components/pagination
