---
id: container
title: Container
sidebar_label: Container
---



import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Notification from 'react-bulma-components/lib/components/notification';
import Section from 'react-bulma-components/lib/components/section';


The container component is a layout element that centers your contents horizontzlly.

## **Import**
---



``` shell
import Container from 'react-bulma-components/lib/components/container';
```


---

## **Examples**

Wrap your elements with a ```<Container>``` tag to center them horizontally.

<Section>
<Box>
<Container>
  <Notification color="info">
    <Heading size={5}>Default</Heading>
    <Heading subtitle>Container</Heading>
  </Notification>
</Container>
</Box>
</Section>




```jsx
<Container>
  <Notification color="info">
    <Heading size={5}>Default</Heading>
    <Heading subtitle>Container</Heading>
  </Notification>
</Container>
```



---        
###  **Fluid Container**

Create containers with margins on both sides using the ```fluid``` modifier.

<Section>
<Container fluid>
  <Notification color="danger">
    <Heading size={5} >Fluid</Heading>
    <Heading subtitle >Container</Heading>
  </Notification>
</Container>
</Section>



```jsx
<Container fluid>
  <Notification color="danger">
    <Heading size={5} >Fluid</Heading>
    <Heading subtitle >Container</Heading>
  </Notification>
</Container>
```



---
---
### **Container Breakpoint**

Establish your container width by using the `breakpoint` modifier. Set it to `success` for widescreen breakpoint or `fullhd` for fullwidth breakpoint.


<Section>
<Container breakpoint="success">
 <Notification color="info">
   <Heading size={5} >Breakpoint Widescreen</Heading>
   <Heading subtitle >Container</Heading>
 </Notification>
</Container>
</Section>




```jsx

<Container breakpoint="success">
 <Notification color="info">
    <Heading size={5} >Breakpoint Widescreen</Heading>
    <Heading subtitle >Container</Heading>
 </Notification>
</Container>

```



**fullwidth Breakpoint**


<Section>
<Container breakpoint="fullhd">
 <Notification color="primary">
   <Heading size={5} >Breakpoint Fullhd</Heading>
   <Heading subtitle >Container</Heading>
 </Notification>
</Container>
</Section>

```jsx
<Container breakpoint="fullhd">
 <Notification color="primary">
   <Heading size={5} >Breakpoint Fullhd</Heading>
   <Heading subtitle >Container</Heading>
 </Notification>
</Container>
```


---

## Official documentation

https://bulma.io/documentation/layout/container