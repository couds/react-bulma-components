---
id: responsiveness
title: Responsiveness
sidebar_label: Responsiveness
---

import Columns from 'react-bulma-components/lib/components/columns'
import Hero from 'react-bulma-components/lib/components/hero'
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';


---
## **Import**
```js
import Columns from 'react-bulma-components/lib/components/columns'
```

---
---

## **Examples**

<Section>
  <div>
    <Box>
      <Heading size={5} renderAs="p">
        Mobile
      </Heading>
      <Columns breakpoint="mobile">
        <Columns.Column>
          <Hero color="success">First column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="info">Second column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Third column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Fourth column</Hero>
        </Columns.Column>
      </Columns>
    </Box>
    <Box>
      <Heading size={5} renderAs="p">
        Tablet
      </Heading>
      <Columns breakpoint="tablet">
        <Columns.Column>
          <Hero color="success">First column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="info">Second column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Third column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Fourth column</Hero>
        </Columns.Column>
      </Columns>
    </Box>
    <Box>
      <Heading size={5} renderAs="p">
        Desktop
      </Heading>
      <Columns breakpoint="desktop">
        <Columns.Column>
          <Hero color="success">First column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="info">Second column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Third column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Fourth column</Hero>
        </Columns.Column>
      </Columns>
    </Box>
  </div>
</Section>

```jsx
<Section>
  <div>
    <Box>
      <Heading size={5} renderAs="p">
        Mobile
      </Heading>
      <Columns breakpoint="mobile">
        <Columns.Column>
          <Hero color="success">First column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="info">Second column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Third column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Fourth column</Hero>
        </Columns.Column>
      </Columns>
    </Box>
    <Box>
      <Heading size={5} renderAs="p">
        Tablet
      </Heading>
      <Columns breakpoint="tablet">
        <Columns.Column>
          <Hero color="success">First column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="info">Second column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Third column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Fourth column</Hero>
        </Columns.Column>
      </Columns>
    </Box>
    <Box>
      <Heading size={5} renderAs="p">
        Desktop
      </Heading>
      <Columns breakpoint="desktop">
        <Columns.Column>
          <Hero color="success">First column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="info">Second column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Third column</Hero>
        </Columns.Column>
        <Columns.Column>
          <Hero color="warning">Fourth column</Hero>
        </Columns.Column>
      </Columns>
    </Box>
  </div>
</Section>
```

<Section>
  <Columns breakpoint="mobile">
    <Columns.Column
      mobile={{
        size: 'three-quarters',
        }}
      tablet={{
        size: 'two-thirds',
        }}
      desktop={{
        size: 'half',
        }}
      widescreen={{
        size: 'one-third',
        }}
      fullhd={{
        size: 'one-quarter',
        }}>
      <Hero color="info">
        <p>
         is-three-quarters-mobile
         <br />
         is-two-thirds-tablet
         <br />
         is-half-desktop is-one-third-widescreen is-one-quarter-fullhd
        </p>
      </Hero>
    </Columns.Column>
    <Columns.Column className="column">
      <Hero color="info">1</Hero>
    </Columns.Column>
    <Columns.Column className="column">
      <Hero color="warning">1</Hero>
    </Columns.Column>
  </Columns>
</Section>

```jsx
<Section>
  <Columns breakpoint="mobile">
    <Columns.Column
      mobile={{
        size: 'three-quarters',
        }}
      tablet={{
        size: 'two-thirds',
        }}
      desktop={{
        size: 'half',
        }}
      widescreen={{
        size: 'one-third',
        }}
      fullhd={{
        size: 'one-quarter',
        }}>
      <Hero color="info">
        <p>
         is-three-quarters-mobile
         <br />
         is-two-thirds-tablet
         <br />
         is-half-desktop is-one-third-widescreen is-one-quarter-fullhd
        </p>
      </Hero>
    </Columns.Column>
    <Columns.Column className="column">
      <Hero color="info">1</Hero>
    </Columns.Column>
    <Columns.Column className="column">
      <Hero color="warning">1</Hero>
    </Columns.Column>
  </Columns>
</Section>
```

---



## Official documentation

https://bulma.io/documentation/columns/responsiveness
