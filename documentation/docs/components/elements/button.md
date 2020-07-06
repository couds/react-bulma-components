---
id: button
title: Button
sidebar_label: Button
---
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';
import Section from 'react-bulma-components/lib/components/section';
import PropTypes from 'prop-types';


 The Button element is used to take user actions.  

---
### **Import**


``` shell

import Button from 'react-bulma-components/lib/components/button';

```

---

---

### **Examples**



<Section>
<Button>Button</Button>
</Section>
	


```jsx
  <Button>Button</Button>
```

	



#### **As another react element**


<Section>
<Button
 color="info">
Button rendered using another React Component with props
</Button>
</Section>


```jsx
<Button
 color="info">
Button rendered using another React Component with props
</Button>
```




#### **Button group**

<Section>
<Button.Group>
 <Button
    renderAs="span"
    color="success">
          Save changes
 </Button>
 <Button
    renderAs="span"
    color="info">
          Save and continue
 </Button>
 <Button
    renderAs="span"
    color="danger">
          Cancel
 </Button>
</Button.Group>
</Section>



```jsx
<Button.Group>
 <Button
    renderAs="span"
    color="success">
          Save changes
 </Button>
 <Button
    renderAs="span"
    color="info">
          Save and continue
 </Button>
 <Button
    renderAs="span"
    color="danger">
          Cancel
 </Button>
</Button.Group>
```




#### **Ref forwarding**
<Section>
 <Button onClick={() => ref.current.click()}>click other button</Button>
 
 <Button>
 this will be clicked
 </Button>
</Section>



```jsx
const ref = React.createRef();

return (
 <Button onClick={() => ref.current.click()}>click other button</Button>
 <Button
    ref={ref}
    onClick={() => console.log('clicked')}>
    this will be clicked
 </Button>
);
```


---

## Official documentation

https://bulma.io/documentation/elements/button



