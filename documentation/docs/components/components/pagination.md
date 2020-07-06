---
id: pagination
title: Pagination
sidebar_label: Pagination
---


import Pagination from 'react-bulma-components/lib/components/pagination';
import Box from 'react-bulma-components/lib/components/box';
import Section from 'react-bulma-components/lib/components/section';



---
### **Import**


```shell
import Pagination from 'react-bulma-components/lib/components/pagination';

```
---


---


## **Examples**

<Section>
<Pagination current={3} total={5} delta={1} />
</Section>



```jsx
<Pagination current={3} total={5} delta={1} />
```


### **Without page number**

<Section>
<Pagination current={3} total={5} delta={0} />
</Section>



```jsx
<Pagination current={3} total={5} delta={0} />
```

### **without prev/next button**

<Section>
<Pagination showPrevNext={false} current={3} total={5} delta={1} />
</Section>


```jsx
<Pagination showPrevNext={false} current={3} total={5} delta={1} />
```

### ** with all buttons manually disabled**

<Section>
<Pagination disabled current={3} total={5} />
</Section>


```jsx
<Pagination disabled current={3} total={5} />
```
---

## Official documentation

https://bulma.io/documentation/components/pagination