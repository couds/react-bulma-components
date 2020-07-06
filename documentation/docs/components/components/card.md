---
id: card
title: Card
sidebar_label: Card
---

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import Section from 'react-bulma-components/lib/components/section';


The card component is a normal responsive card. It can be used with other elements to display information.

---
### **Import**


```shell
import Card from 'react-bulma-components/lib/components/card';
```
---

---
To create a `Card` component:

1. Add a `<Card />` tag.

2. Add in your desired `card` element.



### **Card Elements**

The card container comprises of different elements.

-  `<Card />` : main card container.
   -  `<Card.Image />`  : for adding images.
   -  `<Card.Content />` : for other components.
   -  `<Card.Header />` : for header contents.
       -   `<Card.Header.Title />` :  for Header text.
   -  `<Card.Footer />` : for footer contents.
        -   `<Card.Footer.Item />` : for adding other components in the footer container.

---

## **Examples**

<Section>
<Card>
      <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
</Card>
</Section>



```jsx
<Card>
      <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
</Card>

```


### **Card with footer actions**

<Section>
<Card>
      <Card.Header>
        <Card.Header.Title>Title</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Yes">Yes</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#No">No</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#Maybe">Maybe</Card.Footer.Item>
      </Card.Footer>
</Card>
</Section>


```jsx
<Card>
      <Card.Header>
        <Card.Header.Title>Title</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Yes">Yes</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#No">No</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#Maybe">Maybe</Card.Footer.Item>
      </Card.Footer>
</Card>
```

---

## Official documentation

https://bulma.io/documentation/components/card