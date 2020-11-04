---
id: card
title: Card
sidebar_label: Card
---

import { Card, Media, Image, Content, Heading, Section } from 'react-bulma-components';

The card component is a normal responsive card. It can be used with other elements to display information.

---

## **Import**

```js
import { Card } from 'react-bulma-components';
```

<br />

To create a `Card` component:

1. Add a `<Card />` tag.

2. Add in your desired `card` element.

### **Card Elements**

The card container comprises of different elements.

- `<Card />` : main card container.
  - `<Card.Image />` : for adding images.
  - `<Card.Content />` : for other components.
  - `<Card.Header />` : for header contents.
    - `<Card.Header.Title />` : for Header text.
  - `<Card.Footer />` : for footer contents.
    - `<Card.Footer.Item />` : for adding other components in the footer container.

---

## **Examples**

<Section>
  <Card>
    <Card.Image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png" />
    <Card.Content>
       <Media>
        <Media.Item renderAs="figure" position="left">
          <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
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
  <Card>
    <Card.Image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png" />
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
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
<Section>
  <Card>
    <Card.Image
      size="4by3"
      src="https://bulma.io/images/placeholders/1280x960.png"
    />
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </Media.Item>
        <Media.Item>
          <Heading size={4}>John Smith</Heading>
          <Heading subtitle size={6}>
            @johnsmith
          </Heading>
        </Media.Item>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
        <a href="#2">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </Card.Content>
  </Card>
  <Card>
    <Card.Image
      size="4by3"
      src="https://bulma.io/images/placeholders/1280x960.png"
    />
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </Media.Item>
        <Media.Item>
          <Heading size={4}>John Smith</Heading>
          <Heading subtitle size={6}>
            @johnsmith
          </Heading>
        </Media.Item>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
        <a href="#2">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </Card.Content>
  </Card>
</Section>
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
          <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
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
  <Card>
    <Card.Header>
      <Card.Header.Title>Title</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
        </Media.Item>
        <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
        </Media.Item>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
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
<Section>
  <Card>
    <Card.Header>
      <Card.Header.Title>Title</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </Media.Item>
        <Media.Item>
          <Heading size={4}>John Smith</Heading>
          <Heading subtitle size={6}>
            @johnsmith
          </Heading>
        </Media.Item>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
        <a href="#2">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </Card.Content>
    <Card.Footer>
      <Card.Footer.Item renderAs="a" href="#Yes">
        Yes
      </Card.Footer.Item>
      <Card.Footer.Item renderAs="a" href="#No">
        No
      </Card.Footer.Item>
      <Card.Footer.Item renderAs="a" href="#Maybe">
        Maybe
      </Card.Footer.Item>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Header>
      <Card.Header.Title>Title</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </Media.Item>
        <Media.Item>
          <Heading size={4}>John Smith</Heading>
          <Heading subtitle size={6}>
            @johnsmith
          </Heading>
        </Media.Item>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
        <a href="#2">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </Card.Content>
    <Card.Footer>
      <Card.Footer.Item renderAs="a" href="#Yes">
        Yes
      </Card.Footer.Item>
      <Card.Footer.Item renderAs="a" href="#No">
        No
      </Card.Footer.Item>
      <Card.Footer.Item renderAs="a" href="#Maybe">
        Maybe
      </Card.Footer.Item>
    </Card.Footer>
  </Card>
</Section>
```

---

## Official documentation

https://bulma.io/documentation/components/card
