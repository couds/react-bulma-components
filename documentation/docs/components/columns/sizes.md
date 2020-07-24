---
id: sizes
title: Sizes
sidebar_label: Sizes
---

import Columns from 'react-bulma-components/lib/components/columns'
import Hero from 'react-bulma-components/lib/components/hero'
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

---

## **Import**

```js
import Columns from 'react-bulma-components/lib/components/columns';
```

<br />

## **Examples**

<Section>
  <Columns>
    <Columns.Column size={1}>
      <Hero color="danger">First column</Hero>
    </Columns.Column>
    <Columns.Column size={2}>
      <Hero color="primary">Second column</Hero> 
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="danger">Thirld column</Hero> 
    </Columns.Column>
    <Columns.Column size={4}>
      <Hero color="primary">Fourth column</Hero> 
    </Columns.Column>
  </Columns>
</Section>

```jsx
<Section>
  <Columns>
    <Columns.Column size={1}>
      <Hero color="danger">First column</Hero>
    </Columns.Column>
    <Columns.Column size={2}>
      <Hero color="primary">Second column</Hero>
    </Columns.Column>
    <Columns.Column size={3}>
      <Hero color="danger">Thirld column</Hero>
    </Columns.Column>
    <Columns.Column size={4}>
      <Hero color="primary">Fourth column</Hero>
    </Columns.Column>
  </Columns>
</Section>
```

### Sizes by 12 columns

<Section>
  <div>
    <Columns>
     <Columns.Column size={1}>
        <Hero color="success">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="info">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="warning">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={2}>
        <Hero color="success">Size 2</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="warning">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={3}>
        <Hero color="success">Size 3</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={4}>
        <Hero color="success">Size 4</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={5}>
        <Hero color="success">Size 5</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={6}>
        <Hero color="success">Size 6</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={7}>
        <Hero color="success">Size 7</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={8}>
        <Hero color="success">Size 8</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={9}>
        <Hero color="success">Size 9</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={10}>
        <Hero color="success">Size 10</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={11}>
        <Hero color="success">Size 11</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={12}>
        <Hero color="success">Size 12</Hero>
      </Columns.Column>
    </Columns>
  </div>
</Section>

```jsx
<Section>
  <div>
    <Columns>
      <Columns.Column size={1}>
        <Hero color="success">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="info">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="warning">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={2}>
        <Hero color="success">Size 2</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="warning">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={3}>
        <Hero color="success">Size 3</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={4}>
        <Hero color="success">Size 4</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={5}>
        <Hero color="success">Size 5</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={6}>
        <Hero color="success">Size 6</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={7}>
        <Hero color="success">Size 7</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="black">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={8}>
        <Hero color="success">Size 8</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="dark">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={9}>
        <Hero color="success">Size 9</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="light">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={10}>
        <Hero color="success">Size 10</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="white">Size 1</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={11}>
        <Hero color="success">Size 11</Hero>
      </Columns.Column>
      <Columns.Column size={1}>
        <Hero color="danger">Size 1</Hero>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={12}>
        <Hero color="success">Size 12</Hero>
      </Columns.Column>
    </Columns>
  </div>
</Section>
```

### **Offset**

<Section>
  <div>
    <Columns mobile>
      <Columns.Column size="half" offset="one-quarter">
        <Hero color="info">
          <p>
            size half
            <br />
            offset one-quarter
          </p>
        </Hero>
      </Columns.Column>
    </Columns>
    <Columns mobile>
      <Columns.Column size={4} offset={8}>
        <Hero color="info">
          <p>
            size 4
            <br />
            offset 8
          </p>
        </Hero>
      </Columns.Column>
    </Columns>
    <Columns mobile>
      <Columns.Column size={11} offset={1}>
        <Hero color="info">
          <p>
            size 11
            <br />
            offset 1
          </p>
        </Hero>
      </Columns.Column>
    </Columns>
  </div>
</Section>

```jsx
<Section>
  <div>
    <Columns mobile>
      <Columns.Column size="half" offset="one-quarter">
        <Hero color="info">
          <p>
            size half
            <br />
            offset one-quarter
          </p>
        </Hero>
      </Columns.Column>
    </Columns>
    <Columns mobile>
      <Columns.Column size={4} offset={8}>
        <Hero color="info">
          <p>
            size 4
            <br />
            offset 8
          </p>
        </Hero>
      </Columns.Column>
    </Columns>
    <Columns mobile>
      <Columns.Column size={11} offset={1}>
        <Hero color="info">
          <p>
            size 11
            <br />
            offset 1
          </p>
        </Hero>
      </Columns.Column>
    </Columns>
  </div>
</Section>
```

### **Narrow Columns**

<Section>
  <Columns>
    <Columns.Column narrow>
      <Box style={{ width: 200 }}>
        <Heading size={5} renderAs="p">
          Narrow column
        </Heading>
        <Heading subtitle renderAs="p">
          This column is only 200px wide.
        </Heading>
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box>
        <Heading size={5} renderAs="p">
          Flexible column
        </Heading>
        <Heading subtitle renderAs="p">
          This column will take up the remaining space available.
        </Heading>
      </Box>
    </Columns.Column>
  </Columns>
</Section>

```jsx
<Section>
  <Columns>
    <Columns.Column narrow>
      <Box style={{ width: 200 }}>
        <Heading size={5} renderAs="p">
          Narrow column
        </Heading>
        <Heading subtitle renderAs="p">
          This column is only 200px wide.
        </Heading>
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box>
        <Heading size={5} renderAs="p">
          Flexible column
        </Heading>
        <Heading subtitle renderAs="p">
          This column will take up the remaining space available.
        </Heading>
      </Box>
    </Columns.Column>
  </Columns>
</Section>
```

---

## Official documentation

https://bulma.io/documentation/columns/sizes
