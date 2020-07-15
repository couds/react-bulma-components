---
id: tag
title: Tag
sidebar_label: Tag
---

import Tag from 'react-bulma-components/lib/components/tag';
import Section from 'react-bulma-components/lib/components/section';

---

## **Import**

```js
import Tag from 'react-bulma-components/lib/components/tag';
```

---

---

## **Example**

<Section>
 <Tag>
    Tag Text
 </Tag> 
</Section>

``` jsx
<Section>
 <Tag>
    Tag Text
 </Tag> 
</Section>
```

### **Grouptags**

<Section>
  <Tag.Group>
    <Tag color="primary">
      Tag Text
    </Tag>
    <Tag color="success">
      Tag Text
    </Tag>
    <Tag color="danger">
      Tag Text
    </Tag>
    <Tag color="warrning">
      Tag Text
    </Tag>
    <Tag color="info">
      Tag Text
    </Tag>
  </Tag.Group>
</Section>



```jsx
<Section>
  <Tag.Group>
    <Tag color="primary">
      Tag Text
    </Tag>
    <Tag color="success">
      Tag Text
    </Tag>
    <Tag color="danger">
      Tag Text
    </Tag>
    <Tag color="warrning">
      Tag Text
    </Tag>
    <Tag color="info">
      Tag Text
    </Tag>
  </Tag.Group>
</Section>
```

### **Grouptags without Gaps**

<Section>
  <Tag.Group gapless>
    <Tag>
      Tag Text
    </Tag>
    <Tag color="primary">
       Tag Text
    </Tag>
    </Tag.Group>
    <Tag.Group gapless>
      <Tag color="danger">
        Delete
      </Tag>
      <Tag remove renderAs="a" />
  </Tag.Group>
</Section>


```jsx
<Section>
  <Tag.Group gapless>
    <Tag>
      Tag Text
    </Tag>
    <Tag color="primary">
       Tag Text
    </Tag>
    </Tag.Group>
    <Tag.Group gapless>
      <Tag color="danger">
        Delete
      </Tag>
      <Tag remove renderAs="a" />
  </Tag.Group>
</Section>
```

  
### **Multiline Grouptags without Gaps**
  
<Section>
  <Tag.Group gapless>
      <Tag color="dark">
        npm
      </Tag>
      <Tag color="info">
        V 5.3
      </Tag>
      </Tag.Group>
      <Tag.Group gapless>
      <Tag color="dark">
        Build
      </Tag>
      <Tag color="success">
        Pass
      </Tag>
    </Tag.Group>
    <Tag.Group gapless>
      <Tag color="dark">
        Chat
      </Tag>
      <Tag color="primary">
        Slack
      </Tag>
  </Tag.Group>
</Section>


```jsx
<Section>
  <Tag.Group gapless>
      <Tag color="dark">
        npm
      </Tag>
      <Tag color="info">
        V 5.3
      </Tag>
      </Tag.Group>
      <Tag.Group gapless>
      <Tag color="dark">
        Build
      </Tag>
      <Tag color="success">
        Pass
      </Tag>
    </Tag.Group>
    <Tag.Group gapless>
      <Tag color="dark">
        Chat
      </Tag>
      <Tag color="primary">
        Slack
      </Tag>
  </Tag.Group>
</Section>
```



### **Others**
  
<Section>
  <Tag.Group>
    <Tag rounded>
      Rounded
    </Tag>
    <Tag remove />
  </Tag.Group> 
</Section>



```jsx
<Section>
  <Tag.Group>
    <Tag rounded>
      Rounded
    </Tag>
    <Tag remove />
  </Tag.Group> 
</Section>
```

---


## Official documentation

https://bulma.io/documentation/elements/tag
