---
id: media
title: Media
sidebar_label: Media
---

import { Media, Image, Content, Button, Level, Section, Box, Form } from 'react-bulma-components';

const style = { background: '#e6e6e6', width: 64, height: 64 };

The media component is layout element that allows you to create repititive contents.

---

## **Import**

```js
import { Box } from 'react-bulma-components';
```

<br />

## **Structural Components**

The `Media` element consists of 3 component.

### `<Media />`

Main media container.

#### **Modifiers**

| Variable name | Type          | Default values |
| ------------- | ------------- | -------------- |
| `className`   | string        | `undefined`    |
| `style`       | shape         | `undefined`    |
| `renderAs`    | renderAsShape | `div`          |

### `<Media.Item />`

Container to align contents to either left or right side.

#### **Modifiers**

| Variable name | Type                                | Default values |
| ------------- | ----------------------------------- | -------------- |
| `position`    | one of `center`, `right` or `left`. | `center`       |
| `className`   | string                              | `undefined`    |
| `style`       | shape                               | `undefined`    |
| `renderAs`    | renderAsShape                       | `div`          |

### `<Media.Content />`

Container for other elements.

#### **Modifiers**

| Variable name | Type          | Default values |
| ------------- | ------------- | -------------- |
| `className`   | string        | `undefined`    |
| `style`       | shape         | `undefined`    |
| `renderAs`    | renderAsShape | `div`          |

---

## \*_Examples_

How to create a `<Media />` container.

1. Create your main container with the `<Media />` tag.

2. Add Media items into the `<Media.Item />` tag.

3. Add body contents into the `<Media.Content />` tag.

<Box>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
    </Media.Item>
    <Media.Item>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
      <Level breakpoint="mobile">
        <Level.Side align="left">
          <Button link>Like</Button>
          <Button link>Share</Button>
        </Level.Side>
      </Level>
    </Media.Item>
  </Media>
</Box>

```jsx
<Box>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image
        size={64}
        alt="64x64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Media.Item>
    <Media.Item>
      <Content>
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small>{' '}
          <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </Content>
      <Level breakpoint="mobile">
        <Level.Side align="left">
          <Button link>Like</Button>
          <Button link>Share</Button>
        </Level.Side>
      </Level>
    </Media.Item>
  </Media>
</Box>
```

### **Right media**

Modify your contents position in the media container by using the `position` modifier. Set it to `left` or `right` to indicate the desired position.

<Box>
  <Media>
    <Media.Item>
      <p>Lorem Ipsum</p>
    </Media.Item>
    <Media.Item renderAs="figure" position="right">
      <img style={style} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
    </Media.Item>
  </Media>
</Box>

```jsx
<Box>
  <Media>
    <Media.Item>
      <p>Lorem Ipsum</p>
    </Media.Item>
    <Media.Item renderAs="figure" position="right">
      <img
        style={style}
        alt="64x64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Media.Item>
  </Media>
</Box>
```

### **Nested Container**

Nest your `<media />` container for up to 3 levels.

<Box>
  <Media renderAs="article">
    <Media.Item position="left">
      <Image src="https://bulma.io/images/placeholders/128x128.png" size={64} />
    </Media.Item>
    <Media.Item position="center">
      <Content>
        <p>
          <strong>Barbara Middleton</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br />
          <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
        </p>
      </Content>
      <Media>
        <Media.Item position="left">
          <Image src="https://bulma.io/images/placeholders/128x128.png" size={48} />
        </Media.Item>
        <Media.Item position="center">
          <Content>
            <p>
              <strong>Sean Brown</strong>
              <br />
              Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </Content>
          <Media>
            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
          </Media>
          <Media>
            Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
          </Media>
        </Media.Item>
      </Media>
      <Media>
        <Media.Item position="left">
          <Image src="https://bulma.io/images/placeholders/96x96.png" size={48} />
        </Media.Item>
        <Media.Item position="center">
          <Content>
            <p>
              <strong>Kayli Eunice </strong>
              <br />
              Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </Content>
        </Media.Item>
      </Media>
    </Media.Item>
  </Media>
  <Media renderAs="article">
    <Media.Item position="left">
      <Image src="https://bulma.io/images/placeholders/128x128.png" size={64} />
    </Media.Item>
    <Media.Item position="center">
      <Form.Field>
        <Form.Control renderAs="p">
          <Form.Textarea placeholder="Add a comment..." />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control renderAs="p">
          <Button>Post comment</Button>
        </Form.Control>
      </Form.Field>
    </Media.Item>
  </Media>
</Box>

```jsx
<Box>
  <Media renderAs="article">
    <Media.Item position="left">
      <Image src="https://bulma.io/images/placeholders/128x128.png" size={64} />
    </Media.Item>
    <Media.Item position="center">
      <Content>
        <p>
          <strong>Barbara Middleton</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
          eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
          mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br />
          <small>
            <a>Like</a> · <a>Reply</a> · 3 hrs
          </small>
        </p>
      </Content>
      <Media>
        <Media.Item position="left">
          <Image
            src="https://bulma.io/images/placeholders/128x128.png"
            size={48}
          />
        </Media.Item>
        <Media.Item position="center">
          <Content>
            <p>
              <strong>Sean Brown</strong>
              <br />
              Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis
              leo feugiat.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 2 hrs
              </small>
            </p>
          </Content>
          <Media>
            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
            lorem cursus ullamcorper sit amet nec massa.
          </Media>
          <Media>
            Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
            Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
            tincidunt iaculis diam non, porta aliquet tortor.
          </Media>
        </Media.Item>
      </Media>
      <Media>
        <Media.Item position="left">
          <Image
            src="https://bulma.io/images/placeholders/96x96.png"
            size={48}
          />
        </Media.Item>
        <Media.Item position="center">
          <Content>
            <p>
              <strong>Kayli Eunice </strong>
              <br />
              Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
              Maecenas varius felis sit amet magna vestibulum euismod malesuada
              cursus libero. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; Phasellus lacinia non
              nisl id feugiat.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 2 hrs
              </small>
            </p>
          </Content>
        </Media.Item>
      </Media>
    </Media.Item>
  </Media>
  <Media renderAs="article">
    <Media.Item position="left">
      <Image src="https://bulma.io/images/placeholders/128x128.png" size={64} />
    </Media.Item>
    <Media.Item position="center">
      <Form.Field>
        <Form.Control renderAs="p">
          <Form.Textarea placeholder="Add a comment..." />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control renderAs="p">
          <Button>Post comment</Button>
        </Form.Control>
      </Form.Field>
    </Media.Item>
  </Media>
</Box>
```

---

## Official documentation

https://bulma.io/documentation/layout/media-object
