---
id: container
title: Container
sidebar_label: Container
---
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Notification from 'react-bulma-components/lib/components/notification';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';

The container component is a basic layout element that centers your contents horizontally.

## **Import**
---

```js
import Container from 'react-bulma-components/lib/components/container';
```
--
## **Modifiers**

Variable  name  |    Type                                                                           |   Default values 
----------------|-----------------------------------------------------------------------------------|-------------------
`fluid`         | Boolean                                                                           | `false`           
`className`     |`is-fluid`: Create fluid containers. <br />  `is {breakpoint}` = Add breakpoints.  | `undefined`        
`breakpoint`    |  Breakpoints                                                                      | `undefined`       
`style`         |  Shape                                                                            | `undefined`      
`renderAs`      | renderAsShape                                                                     | `div`            

---

## **Examples**

Wrap your elements with a ```<Container>``` tag to center them horizontally.


<Box>
  <Container>
    <Notification color="info">
    <Heading size={5}>Default</Heading>
    <Heading subtitle>Container</Heading>
    </Notification>
  </Container>
</Box>


```jsx
<Box>
  <Container>
    <Notification color="info">
    <Heading size={5}>Default</Heading>
    <Heading subtitle>Container</Heading>
    </Notification>
  </Container>
</Box>
```
      
###  **Fluid Containers**

Add margins to both Container sides by using the ```fluid``` modifier.

<Box>
  <Container fluid="true">
    <Notification color="danger">
      <Heading size={5} >Fluid</Heading>
      <Heading subtitle >Container</Heading>
    </Notification>
  </Container>
</Box>

```jsx
  <Container fluid>
    <Notification color="danger">
      <Heading size={5} >Fluid</Heading>
      <Heading subtitle >Container</Heading>
    </Notification>
  </Container>
```

### Container with Breakpoints

Establish your container width by using the `breakpoint` modifier.


#### ** Widescreen breakpoint**

<Box>
  <Container breakpoint="widescreen">
   <Notification color="info">
     <Heading size={5} >Breakpoint Widescreen</Heading>
     <Heading subtitle >Container</Heading>
   </Notification>
  </Container>
</Box>

```jsx
<Box>
  <Container breakpoint="widescreen">
   <Notification color="info">
     <Heading size={5} >Breakpoint Widescreen</Heading>
     <Heading subtitle >Container</Heading>
   </Notification>
  </Container>
</Box>
```

#### **Fullwidth Breakpoint**

<Box>
  <Container breakpoint="fullhd">
   <Notification color="primary">
     <Heading size={5} >Breakpoint Fullhd</Heading>
     <Heading subtitle >Container</Heading>
   </Notification>
  </Container>
</Box>

```jsx
<Box>
  <Container breakpoint="fullhd">
   <Notification color="primary">
     <Heading size={5} >Breakpoint Fullhd</Heading>
     <Heading subtitle >Container</Heading>
   </Notification>
  </Container>
</Box>
```

---



## Official documentation

https://bulma.io/documentation/layout/container